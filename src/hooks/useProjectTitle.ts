import { useLanguage } from "../contexts/LanguageContext";

export function useProjectTitle(projectId: number): string {
  const { t } = useLanguage();
  const key = String(projectId) as keyof typeof t.projectsPage.named;
  const named = t.projectsPage.named[key];

  if (named?.title) return named.title;
  return t.projectsPage.defaultTitle;
}

export function useProjectDescription(projectId: number): string {
  const { t } = useLanguage();
  const key = String(projectId) as keyof typeof t.projectsPage.named;
  const named = t.projectsPage.named[key];

  return named?.description ?? t.projectsPage.placeholderDescription;
}
