import type { ThemeRegistration } from "shiki";

// GitHub Light inspired theme for Topineur codeblocks
export const topineurTheme: ThemeRegistration = {
  name: "topineur-light",
  type: "light",
  colors: {
    "editor.foreground": "#24292e",
    "editor.background": "#ffffff",
    "editor.selectionBackground": "#f1f8ff",
    "editor.inactiveSelectionBackground": "#f1f8ff",
    "editor.lineHighlightBackground": "#f6f8fa",
    "editorCursor.foreground": "#24292e",
    "editorWhitespace.foreground": "#e1e4e8",
  },
  tokenColors: [
    {
      scope: ["keyword.control.topineur"],
      settings: {
        foreground: "#d73a49", // red-ish like GitHub for keywords
        fontStyle: "bold",
      },
    },
    {
      scope: ["entity.name.function.topineur"],
      settings: {
        foreground: "#6f42c1", // purple for function names
      },
    },
    {
      scope: ["support.type.topineur"],
      settings: {
        foreground: "#005cc5", // blue for types
      },
    },
    {
      scope: ["constant.numeric.integer.topineur", "constant.numeric.float.topineur", "constant.numeric.topineur"],
      settings: {
        foreground: "#005cc5", // blue for numbers
      },
    },
    {
      scope: ["string.quoted.double.topineur"],
      settings: {
        foreground: "#032f62", // dark blue for strings
      },
    },
    {
      scope: ["comment.line.topineur"],
      settings: {
        foreground: "#6a737d", // gray for comments
        fontStyle: "italic",
      },
    },
    {
      scope: ["meta.decorator.topineur"],
      settings: {
        foreground: "#6f42c1", // purple for decorators
      },
    },
    {
      scope: ["entity.name.decorator.topineur"],
      settings: {
        foreground: "#6f42c1", // color decorator identifier as well
        fontStyle: "bold",
      },
    },
    {
      scope: ["variable.other.topineur", "variable.other.module.topineur"],
      settings: {
        foreground: "#24292e",
      },
    },
    {
      scope: ["keyword.operator.topineur"],
      settings: {
        foreground: "#d73a49",
      },
    },
    {
      scope: ["keyword.operator.topineur"],
      settings: {
        foreground: "#d73a49",
      },
    },
  ],
};
