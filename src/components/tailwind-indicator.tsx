import ThemeSelect from "./theme-select";

export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 print:hidden flex h-6 w-6 items-center justify-center rounded bg-gray-800 p-3 font-mono text-xs font-semibold text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}

export function UICustomizer() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 right-1 z-50 print:hidden flex items-center justify-center rounded-xl bg-gray-800 text-xs font-semibold text-white">
      <ThemeSelect />
    </div>
  );
}
