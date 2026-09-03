export interface Theme {
  id: string;
  name: string;
  scheme: 'light' | 'dark';
}

/**
 * Theme registry.
 *
 * To add a custom color scheme:
 *   1. Create `src/themes/<id>.css` defining the CSS variables (see porcelain.css/graphite.css).
 *   2. Import it in `src/layouts/Layout.astro` next to the other theme CSS files.
 *   3. Add an entry here. It will automatically appear in the theme picker.
 */
export const themes: Theme[] = [
  { id: 'porcelain', name: 'Porcelain', scheme: 'light' },
  { id: 'graphite', name: 'Graphite', scheme: 'dark' },
];

export const systemLightTheme = 'porcelain';
export const systemDarkTheme = 'graphite';

export function resolveTheme(choice: string): string {
  if (choice === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? systemDarkTheme
      : systemLightTheme;
  }
  return themes.some((t) => t.id === choice) ? choice : systemLightTheme;
}
