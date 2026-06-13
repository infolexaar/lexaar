export type MediaType = "image" | "video";

export interface ProjectMediaItem {
  type: MediaType;
  filename: string;
  load: () => Promise<string>;
}

export interface ProjectIndexEntry {
  id: number;
  media: ProjectMediaItem[];
  coverLoader: () => Promise<string>;
  hasVideo: boolean;
}

const mediaGlob = import.meta.glob<string>(
  "../assets/lexaarProject/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,MOV,MP4,mp4,mov,webp,WEBP}",
  { query: "?url", import: "default" }
);

function buildProjectIndex(): ProjectIndexEntry[] {
  const map = new Map<number, ProjectMediaItem[]>();

  for (const [path, loader] of Object.entries(mediaGlob)) {
    const match = path.match(/lexaarProject\/(\d+)\/([^/]+)$/);
    if (!match) continue;

    const id = parseInt(match[1], 10);
    const filename = decodeURIComponent(match[2]);
    const type: MediaType = /\.(mov|mp4)$/i.test(filename) ? "video" : "image";
    const items = map.get(id) ?? [];
    items.push({ type, filename, load: loader as () => Promise<string> });
    map.set(id, items);
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => a - b)
    .map(([id, media]) => {
      media.sort((a, b) => {
        if (a.type !== b.type) return a.type === "image" ? -1 : 1;
        return a.filename.localeCompare(b.filename, undefined, { numeric: true });
      });

      const firstImage = media.find((item) => item.type === "image");
      const coverLoader = firstImage?.load ?? media[0].load;

      return {
        id,
        media,
        coverLoader,
        hasVideo: media.some((item) => item.type === "video"),
      };
    });
}

export const LEXAAR_PROJECT_INDEX = buildProjectIndex();
export const LEXAAR_PROJECT_COUNT = LEXAAR_PROJECT_INDEX.length;
export const HOMEPAGE_PREVIEW_COUNT = 7;

export function getProjectEntry(id: number): ProjectIndexEntry | undefined {
  return LEXAAR_PROJECT_INDEX.find((project) => project.id === id);
}

export async function loadProjectCover(id: number): Promise<string | null> {
  const project = getProjectEntry(id);
  if (!project) return null;
  return project.coverLoader();
}

export async function loadProjectMedia(
  id: number
): Promise<Array<{ type: MediaType; src: string }>> {
  const project = getProjectEntry(id);
  if (!project) return [];

  return Promise.all(
    project.media.map(async (item) => ({
      type: item.type,
      src: await item.load(),
    }))
  );
}
