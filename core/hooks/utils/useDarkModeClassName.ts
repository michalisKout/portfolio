import { useDarkMode } from '../../providers/DarkModeProvider';

export const useDarkModeClassName = () => {
  const { isDarkMode } = useDarkMode();

  return `${isDarkMode ? 'dark' : ''}`;
};
