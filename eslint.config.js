import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import {defineConfig} from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      globals: globals.node
    },
    rules: {
      '@stylistic/array-bracket-newline': 'error',
      '@stylistic/array-bracket-spacing': 'error',
      '@stylistic/comma-dangle': 'error',
      '@stylistic/comma-spacing': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/object-curly-newline': 'error',
      '@stylistic/object-curly-spacing': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/template-curly-spacing': 'error'
    }
  }
])