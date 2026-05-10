import { useTheme } from "next-themes";

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  return (
    <select
      className="w-24 relative rounded border bg-white dark:bg-black text-foreground text-xs px-1.5 py-1 focus:outline-none text-nowrap"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      // id="themeSelect"
      aria-label="Change theme color"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>

      {/* <span className="absolute bottom-1.5 top-1.5 flex items-center right-0 pointer-events-none">
        <ChevronDown width="14" height="14" />
      </span> */}
    </select>
  );
}
