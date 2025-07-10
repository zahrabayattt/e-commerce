import { LucideMoon, LucideSun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvide';

const ModToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick} className='mr-3 mt-2'>
      <LucideSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <LucideMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModToggle;
