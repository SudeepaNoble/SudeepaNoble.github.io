// Inlined into <head> before hydration so the correct theme is applied
// before first paint — this is what avoids the "flash of wrong theme".
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('sk-theme');
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    var root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;
  } catch (e) {}
})();
`;
