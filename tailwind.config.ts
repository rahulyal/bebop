import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        "bg-sidebar-surface": "#cbd1e1",
        // You can add more custom colors here
        // 'custom-blue': '#3b82f6',
        // 'custom-green': '#10b981',
      },
    },
  },
} satisfies Config;
