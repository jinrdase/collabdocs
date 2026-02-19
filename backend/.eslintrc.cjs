/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { node: true, jest: true },
  ignorePatterns: ['dist', 'node_modules'],

  // ✅ 默认配置：不启用 project service（这样 .eslintrc.js 就不会报）
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },

  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],

  // ✅ 只对 TS 文件启用 type-aware（project）
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],

  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
