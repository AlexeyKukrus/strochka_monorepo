module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    project: ['./client/tsconfig.json', './server/tsconfig.json'], // Указываем оба tsconfig.json
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'dist'],
  overrides: [
    {
      files: ['client/src/**/*.ts'],
      rules: {
        // Можно добавить специфичные для client правила
      },
    },
    {
      files: ['server/src/**/*.ts'],
      rules: {
        // Можно добавить специфичные для server правила
      },
    },
  ],
};
