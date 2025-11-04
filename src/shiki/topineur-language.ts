import type { LanguageRegistration } from "shiki";

export const topineurLanguage: LanguageRegistration = {
  name: "topineur",
  scopeName: "source.topineur",
  aliases: ["top"],
  patterns: [
    // Comments
    { match: "\\|-.*$", name: "comment.line.topineur" },

    // Decorators
    {
      match: "@([A-Za-z_][\\w-]*)",
      captures: {
        "0": { name: "meta.decorator.topineur" },
        "1": { name: "entity.name.decorator.topineur" },
      },
    },

    // Package / import
    { match: "\\b(package|import)\\b", name: "keyword.declaration.topineur" },

    // Control keywords and declarations
    {
      match:
        "\\b(def|let|object|type|fun|for|in|do|end|if|then|else|while|return|top|self|true|false)\\b",
      name: "keyword.control.topineur",
    },

    // Function definitions
    {
      match: "\\bdef\\s+([A-Za-z_][\\w]*)\\s*(?=\\()",
      captures: {
        "0": { name: "keyword.control.topineur" },
        "1": { name: "entity.name.function.topineur" },
      },
    },

    // Field / variable names
    { match: "\\b([a-z_][\\w]*)\\b", name: "variable.other.topineur" },

    // Type identifiers
    { match: "\\b(Int|Float|Bool|String|Result|[A-Z][A-Za-z0-9_]*)\\b", name: "support.type.topineur" },

    // Numbers
    { match: "\\b\\d+\\.\\d+\\b", name: "constant.numeric.float.topineur" },
    { match: "\\b\\d+\\b", name: "constant.numeric.integer.topineur" },

    // Strings
    {
      begin: '"',
      end: '"',
      name: "string.quoted.double.topineur",
      patterns: [{ match: "\\\\.", name: "constant.character.escape.topineur" }],
    },

    // Operators
    { match: "\\+|\\-|\\*|\\/|<=|>=|<|>|%|==|\\+\\+|\\.\\.", name: "keyword.operator.topineur" },

    // Dotted identifiers
    { match: "\\b([A-Za-z_][\\w]*)(\\.[A-Za-z_][\\w]*)+\\b", name: "variable.other.module.topineur" },
  ],

  repository: {
    // Is empty
  },
};
