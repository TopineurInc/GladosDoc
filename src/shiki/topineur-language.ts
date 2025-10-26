import type { LanguageRegistration } from 'shiki';

export const topineurLanguage: LanguageRegistration = {
  name: 'topineur',
  scopeName: 'source.topineur',
  patterns: [
    // Get the function definition pattern
    {
      match: '\\b(def)\\b',
      name: 'keyword.control.topineur'
    },
    // Get the Type pattern
    {
      match: '\\b(Int|String|Bool|Float)\\b',
      name: 'support.type.topineur'
    },
    // Get the number pattern
    {
      match: '\\b([0-9]+)\\b',
      name: 'constant.numeric.topineur'
    },
    // Get the comment pattern
    {
      match: '\\|\\-.*$',
      name: 'comment.line.topineur'
    }
  ],
  repository: {
    // Is empty
  }
};
