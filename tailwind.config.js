/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode with class-based switching
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Soft Blue - modern and professional (light mode)
        secondary: "#F97316", // Vibrant Orange - for accents and call-to-action (light mode)
        background: "#F9FAFB", // Off-white - clean and subtle (light mode)
        accent: "#34D399", // Mint Green - refreshing and modern (light mode)
        neutral: "#6B7280", // Cool Gray - for text and secondary details (light mode)

        // Dark mode colors (reverse colors)
        "primary-dark": "#1E40AF", // Darker Blue for dark mode
        "secondary-dark": "#FB923C", // Darker Orange for dark mode
        "background-dark": "#1F2937", // Dark background
        "accent-dark": "#10B981", // Darker Mint Green for dark mode
        "neutral-dark": "#D1D5DB", // Lighter gray for text in dark mode
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Sleek and modern font
        arabic: ["Tajawal", "sans-serif"], // Elegant and highly readable Arabic font
      },
    },
  },
  plugins: [],
};
