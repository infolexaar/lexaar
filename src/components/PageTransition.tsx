import { useLocation } from "react-router-dom";

/**
 * Обёртка для плавного появления контента при смене страницы.
 * При смене pathname контейнер перемонтируется и проигрывается анимация fade-in.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
