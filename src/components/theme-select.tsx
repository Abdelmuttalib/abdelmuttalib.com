import { useTheme } from "next-themes";

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="relative">
      <select
        className="w-24 relative rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs px-1 py-0.5 transition-colors focus:outline-none text-nowrap "
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        // id="themeSelect"
        aria-label="Change theme color"
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      {/* <span className="absolute bottom-1.5 top-1.5 flex items-center right-0 pointer-events-none">
        <ChevronDown width="14" height="14" />
      </span> */}
    </label>
  );
}
