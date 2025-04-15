
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-full w-9 h-9 border-2 border-slate-800/40 dark:border-blue-500/40 hover:bg-slate-800/10 dark:hover:bg-blue-500/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-portfolio-navy" />
      ) : (
        <Sun size={18} className="text-portfolio-accent" />
      )}
    </Button>
  );
}
