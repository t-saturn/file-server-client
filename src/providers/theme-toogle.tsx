'use client';

import { useTheme } from './theme-rpovider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded">
      {theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    </button>
  );
};

export default ThemeToggle;
