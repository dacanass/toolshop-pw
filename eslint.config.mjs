import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },

  // Configuraciones recomendadas
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'], // Aplica reglas de Playwright solo en la carpeta de tests
  },

  // Desactiva reglas de estilo que entran en conflicto con Prettier (debe ir al final)
  eslintConfigPrettier,
];
