import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="tap-target relative inline-flex h-10 w-10 items-center justify-center overflow-hidden border border-edge text-ink-100 transition-all duration-300 hover:border-accent-500 hover:text-accent-500 active:bg-muted-fill active:text-accent-500"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <Sun
        size={16}
        aria-hidden
        className={`absolute transition-all duration-400 ease-out ${
          isDark
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-50 -rotate-90 opacity-0'
        }`}
      />
      <Moon
        size={16}
        aria-hidden
        className={`absolute transition-all duration-400 ease-out ${
          isDark
            ? 'scale-50 rotate-90 opacity-0'
            : 'scale-100 rotate-0 opacity-100'
        }`}
      />
    </button>
  )
}
