/** @type {import('tailwindcss').Config} */

// --background: var(--color-white);
// --foreground: var(--color-gray-900);

// --color-base: 0 0% 100%;
// --color-base-50: 0 0% 98%;
// --color-base-100: 0 0% 96%;
// --color-base-200: 0 0% 90%;
// --color-base-300: 0 0% 83%;
// --color-base-400: 0 0% 64%;
// --color-base-500: 0 0% 45%;
// --color-base-600: 0 0% 32%;
// --color-base-700: 0 0% 25%;
// --color-base-800: 0 0% 15%;
// --color-base-900: 0 0% 9%;
// --color-base-950: 0 0% 4%;

// --layer-1: var(--background);

// --card: 0 0% 100%;
// --card-foreground: 0 0% 3.9%;

// --popover: var(--color-base);
// --popover-foreground: var(--color-base-900);

// --primary: var(--color-base-50);
// --primary-foreground: var(--color-base-900);

// --secondary: var(--color-base-200);
// --secondary-foreground: var(--color-base-900);

// --muted: var(--color-base-200);
// --muted-foreground: var(--color-base-700);

// --accent: var(--color-base-200);
// --accent-foreground: var(--color-base-900);

// --destructive: 0 84.2% 60.2%;
// --destructive-foreground: var(--color-base-900);

// --border: var(--color-base-300);
// --input: var(--color-base-300);
// --ring: var(--color-base-800);

// --radius: 0.5rem;

// --gap: 1rem;
// --gap-15: 1.5rem;

// /* #ffffff */
// --overlay: #f2f2f2;
// --border-radius: 5px;

// --color-text: var(--color-gray-900);
// --color-text-subtle: var(--color-gray-600);
// --color-text-subtle2: var(--color-gray-400);

// --layer: var(--background);
// --layer-2: var(--color-base-100);
// --layer-3: var(--color-base-200);
// --layer-4: var(--color-base-300);
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // globals.css
        // --font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        // Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        // "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        // css variable font
        sans: "var(--font-sans)",
      },
      colors: {
        base: {
          DEFAULT: "hsl(var(--color-base))",
          50: "hsl(var(--color-base-50))",
          100: "hsl(var(--color-base-100))",
          200: "hsl(var(--color-base-200))",
          300: "hsl(var(--color-base-300))",
          400: "hsl(var(--color-base-400))",
          500: "hsl(var(--color-base-500))",
          600: "hsl(var(--color-base-600))",
          700: "hsl(var(--color-base-700))",
          800: "hsl(var(--color-base-800))",
          900: "hsl(var(--color-base-900))",
          950: "hsl(var(--color-base-950))",
        },

        layer: {
          DEFAULT: "hsl(var(--layer))",
          2: "hsl(var(--layer-2))",
          3: "hsl(var(--layer-3))",
          4: "hsl(var(--layer-4))",
        },

        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          subtle: "hsl(var(--color-foreground-subtle))",
          subtle2: "hsl(var(--color-foreground-subtle2))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
