import type { ThemeRegistration } from "shiki";

// TODO: Change this shit
export const topineurTheme: ThemeRegistration = {
  name: "topineur-theme",
  type: "dark", // or 'light'
  colors: {
    "editor.foreground": "#FFFFFF",
    "editor.background": "#0a0a0a",
    "editor.selectionBackground": "#1a1a1a",
    "editor.inactiveSelectionBackground": "#1a1a1a",
    "editor.lineHighlightBackground": "#1a1a1a",
    "editorCursor.foreground": "#FFFFFF",
    "editorWhitespace.foreground": "#404040",
  },
  tokenColors: [
    {
      scope: ["keyword.control.topineur"],
      settings: {
        foreground: "#FF6B6B", // Red for 'def'
        fontStyle: "bold",
      },
    },
    {
      scope: ["entity.name.function.topineur"],
      settings: {
        foreground: "#4ECDC4", // Teal for greetings
      },
    },
    {
      scope: ["constant.numeric.topineur"],
      settings: {
        foreground: "#FFD93D", // Yellow for numbers
      },
    },
    {
      scope: ["comment.line.topineur"],
      settings: {
        foreground: "#6A6A6A", // Gray for comments
        fontStyle: "italic",
      },
    },
  ],
};
