
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled
      className="h-9 w-9 px-0 opacity-50"
    >
      <Sun className="h-4 w-4" />
      <span className="sr-only">Light theme only</span>
    </Button>
  );
}
