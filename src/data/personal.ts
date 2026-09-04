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
export const albums: Album[] = [
  { title: 'The College Dropout', cover: '/personal/albums/the_college_dropout.jpg' },
  { title: 'The Forever Story', cover: '/personal/albums/the_forever_story.jpg' },
  { title: 'SUMMERTIDE', cover: '/personal/albums/summertide.jpg' }
];
export const games: Game[] = [
  { title: 'Library of Ruina', image: '/personal/games/library_of_ruina.jpg' },
  { title: 'Arknights', image: '/personal/games/arknights.jpg' }
];
export const media: MediaItem[] = [
  { title: 'Fate/Stay Night', kind: 'photo', src: '/personal/media/fate_stay_night.jpg' },
  { title: 'Interstellar', kind: 'photo', src: '/personal/media/interstellar.jpg' },
  { title: 'Chainsaw Man', kind: 'photo', src: '/personal/media/chainsaw_man.jpg' }
];
