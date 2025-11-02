import globals from 'globals';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import airbnb from 'eslint-config-airbnb';
import airbnbBase from 'eslint-config-airbnb-base';

// The airbnb configs still rely on some legacy parser features
// We need to manually configure the plugins it expects
const airbnbPlugins = {
  import: importPlugin,
  'jsx-a11y': jsxA11yPlugin,
  react: reactPlugin,
};

export default [
  // 1. Global ignores and base JS config
  {
    ignores: ['node_modules', '**/dist/'],
  },
  js.configs.recommended,

  // 2. Backend Configuration (using Airbnb-Base)
  {
    files: ['packages/services/**/*.js'],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...airbnbBase.rules,
      "no-console": "off",
    },
  },

  // 3. Frontend Configuration (using full Airbnb with React)
  {
    files: ['packages/frontend/**/*.{js,jsx}'],
    plugins: airbnbPlugins,
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...airbnb.rules,
      // --- Your Custom Overrides for Airbnb Rules ---
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },

  // 4. Prettier Configuration (MUST BE LAST)
  // This turns off all stylistic rules from the above configs
  prettierConfig,
  // This adds the prettier plugin and rule to enforce formatting
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',// Apply this rule globally
    },
  },
];