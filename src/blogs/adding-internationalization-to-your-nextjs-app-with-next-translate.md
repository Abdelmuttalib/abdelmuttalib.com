---
title: "Adding Internationalization to Your Next.js App with next-translate"
date: "Aug 14, 2023"
---

Hey Developers! Are you looking to make your React Next.js app accessible to a global audience? 🌍 Adding internationalization (i18n) support is the key, and today I want to share an awesome tool that can make this process a breeze: the next-translate package!

Internationalization is crucial for reaching users across different languages and cultures. With next-translate, you can seamlessly integrate multiple languages into your app, allowing your content to resonate with users worldwide.

**Why Choose next-translate?**

- **Simple Setup:** Getting started is a piece of cake! Just install the package and follow a few straightforward configuration steps.

- **Dynamic Content Translation:** next-translate enables you to translate dynamic content like user-generated data or database-driven content effortlessly.

- **SEO-friendly:** Search engines love i18n-friendly apps. next-translate helps you create SEO-friendly URLs for each language, boosting your app's discoverability.

How to Get Started:

**1. Install the package**

```
npm install next-translate
```

**2. Install the next-translate-plugin as a dev dependency**

```
npm install next-translate-plugin --save-dev
```

**3. Configure your Next.js app**

```
// in your next.config.js

import nextTranslate from "next-translate-plugin";

const nextConfig = {
  reactStrictMode: true,

};
export default nextTranslate(nextConfig);
```

wrap your nextConfig options with the nextTranslate function from `next-translate-plugin`

**4. Configure the i18n.json file for next-translate**

- create a i18n.json file in the root of your project

```
// in your i18n.json
{
  "locales": ["en", "fr", "es", "de", "zh"],
  "defaultLocale": "en",
  "pages": {
    "*": ["home"]
  }
}
```

**5. Create your translation files**

place your translation files in the /locales directory
and start translating your content. You can make
different files for the translations based on pages,
components, etc.

![translation files in project directory](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gt9jhoc25pnk7ysxo962.png)

Example of a translation file content (in spanish)

![translation file in spanish](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rol0bmu13mfsvwbdo7ql.png)

**6. Implement translations in your
components**

```
import useTranslation from "next-translate/useTranslation";

export default function MyComponent() {
  const { t } = useTranslation("home");

  return <button>{t("buttons.new_todo")}</button>;
}

```

**7. That's it. Your app now supports translations and different languages reaching to global audience.**

**Ready to See It in Action?**

Check out my [simple internationalized app](https://t3-todo-app-eta-jet.vercel.app/) here to
experience next-translate in action! This practical
example demonstrates how to handle dynamic
content translation seamlessly.
