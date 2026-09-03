export interface Album {
  title: string;
  /** Path to cover image, e.g. '/personal/albums/summer.png' (files live in public/personal/) */
  cover: string;
  description?: string;
}

export interface Game {
  title: string;
  /** Optional screenshot, e.g. '/personal/games/my-game.png' */
  image?: string;
  description?: string;
  url?: string;
}

export interface MediaItem {
  title: string;
  /** Path to the file, e.g. '/personal/media/photo.jpg' */
  src: string;
  kind: 'photo' | 'video' | 'audio';
  url?: string;
}

/**
 * Personal zone content.
 *
 * To add items: put your files under `public/personal/` and add entries below.
 * Example:
 *
 *   export const albums: Album[] = [
 *     { title: 'Trip to Yosemite', cover: '/personal/albums/yosemite.png' },
 *   ];
 */
export const albums: Album[] = [];
export const games: Game[] = [];
export const media: MediaItem[] = [];
