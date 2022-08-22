/** @type {import('tailwindcss').Config} */
module.exports = {
  // 做shaking用，在哪些文件里使用了tailwind的css
  content: ["./packages/**/*.{tsx,jsx}"],
  // 黑夜模式 class 手动配置，media 自动跟随系统
  darkMode: "class",
  // 配置主题
  theme: {
    extend: {
      colors: {
        // key若和tailwind同名，就是替换效果
        primary: "#2f23e2",
      },
    },
  },
  // 插件
  plugins: [],
};
