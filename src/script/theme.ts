export function setupTheme() {
  function getInitialTheme(): string {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') || 'light';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function setTheme(theme: string): void {
    if (typeof document !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }

  if (typeof document !== 'undefined') {
    setTheme(getInitialTheme());

    document.addEventListener('astro:after-swap', () => {
      setTheme(localStorage.getItem('theme') || 'light');
    });
  }
}