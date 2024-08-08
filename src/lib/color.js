function toHSL(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  var colorInHSL = "hsl(" + h + ", " + s + "%, " + l + "%)";

  return colorInHSL;
}

const colors = {
  gray: {
    50: "#DFDFDF",
    100: "#BFBFBF",
    200: "#9F9F9F",
    300: "#808080",
    400: "#606060",
    500: "#404040",
    600: "#212121",
    700: "#1C1C1C",
    800: "#171717",
    900: "#121212",
    950: "#0E0E0E",
  },

  // --color-base: #000000;
  // --color-base-50: #0a0a0a;
  // --color-base-100: #171717;
  // --color-base-200: #262626;
  // --color-base-300: #373737;
  // --color-base-400: #525252;
  // --color-base-500: #8a8a8a;
  // --color-base-600: #a3a3a3;
  // --color-base-700: #d4d4d4;
  // --color-base-800: #e5e5e5;
  // --color-base-900: #f5f5f5;
  // --color-base-950: #fafafa;

  base: {
    20: "#000000",
    50: "#0a0a0a",
    100: "#171717",
    200: "#262626",
    300: "#373737",
    400: "#525252",
    500: "#8a8a8a",
    600: "#a3a3a3",
    700: "#d4d4d4",
    800: "#e5e5e5",
    900: "#f5f5f5",
    950: "#fafafa",
  },

  // --color-base: #ffffff;
  // --color-base-50: #fafafa;
  // --color-base-100: #f5f5f5;
  // --color-base-200: #e5e5e5;
  // --color-base-300: #d4d4d4;
  // --color-base-400: #a3a3a3;
  // --color-base-500: #737373;
  // --color-base-600: #525252;
  // --color-base-700: #404040;
  // --color-base-800: #262626;
  // --color-base-900: #171717;
  // --color-base-950: #0a0a0a;

  base2: {
    20: "#ffffff",
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },
};

function convertColorToHSL(color, name) {
  return Object.keys(color).reduce((acc, key) => {
    acc[`--color-${name}-${key}`] = toHSL(color[key]);
    // .replace("hsl(", "")
    // .replace(",", "")
    // .replace(",", "")
    // .replace(")", "");
    return acc;
  }, {});
}

console.log(convertColorToHSL(colors.base2, "base"));
