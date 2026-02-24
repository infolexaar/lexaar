import { useLayoutEffect, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Находит id блока, в котором сейчас находится верх viewport (для якоря при "Назад").
 */
function getCurrentSectionId(): string | null {
  const scrollY = window.scrollY;
  const elements = document.querySelectorAll<HTMLElement>("[id]");
  let best: { id: string; top: number } | null = null;

  for (const el of elements) {
    if (!el.id || el.id.startsWith("react-")) continue;
    const rect = el.getBoundingClientRect();
    const top = rect.top + scrollY;
    const height = rect.height;
    if (height < 80) continue;
    if (top <= scrollY && top + height > scrollY) {
      if (!best || top > best.top) best = { id: el.id, top };
    }
  }
  return best?.id ?? null;
}

/**
 * При переходе по ссылке записывает в текущую запись истории якорь текущего блока.
 * При "Назад" браузер возвращает URL с якорем — скроллим к элементу.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const pathnameRef = useRef(pathname);
  const restoreRef = useRef(false);

  pathnameRef.current = pathname;

  // При клике по внутренней ссылке сразу пишем якорь в URL (replaceState) ДО перехода
  useEffect(() => {
    const onCapture = (e: MouseEvent) => {
      const a = (e.target as Element)?.closest?.("a");
      if (!a?.href) return;
      try {
        const url = new URL(a.href);
        if (url.origin !== window.location.origin) return;
        const path = url.pathname || "/";
        if (path === pathnameRef.current) return;
        const sectionId = getCurrentSectionId();
        const hashPart = sectionId ? `#${sectionId}` : "";
        const fullPath = pathnameRef.current + hashPart;
        history.replaceState(history.state, "", fullPath);
      } catch {
        // ignore
      }
    };
    document.addEventListener("click", onCapture, true);
    return () => document.removeEventListener("click", onCapture, true);
  }, []);

  // Отмечаем переход по "Назад/Вперёд"
  useLayoutEffect(() => {
    const onPopState = () => {
      restoreRef.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    // При возврате "Назад" приоритет у якоря из URL (браузер уже подставил его)
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        restoreRef.current = false;
        const apply = () => {
          el.scrollIntoView({ behavior: "instant", block: "start" });
        };
        requestAnimationFrame(() => {
          requestAnimationFrame(apply);
          setTimeout(apply, 80);
        });
        return;
      }
    }

    if (restoreRef.current) {
      restoreRef.current = false;
    }

    // Обычный переход вперёд — в начало
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}
