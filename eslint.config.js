import tseslint from 'typescript-eslint';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'prettier';

export default tseslint.config({
  plugins: {
    '@typescript-eslint': tseslintPlugin,
    prettier: prettier,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
  },
});
