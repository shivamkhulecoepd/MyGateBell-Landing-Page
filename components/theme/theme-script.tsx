export function ThemeScript() {
  const script = `(() => {
    try {
      const storedTheme = window.localStorage.getItem('mygatebell-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const enableDark = storedTheme ? storedTheme === 'dark' : prefersDark;
      document.documentElement.classList.toggle('dark', enableDark);
    } catch (error) {
      document.documentElement.classList.remove('dark');
    }
  })();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
