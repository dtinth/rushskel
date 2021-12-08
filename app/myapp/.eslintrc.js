require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/packlets',
    '@rushstack/eslint-config/mixins/tsdoc',
    '@rushstack/eslint-config/mixins/react',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    react: {
      version: '16.9',
    },
  },
  rules: {},
  overrides: [
    {
      files: ['vite.config.ts'],
      parserOptions: { project: null },
      rules: {
        // Turn off these rules to prevent the "You have used a rule which requires parserServices to be generated." error
        '@rushstack/packlets/mechanics': 'off',
        '@rushstack/packlets/circular-deps': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
}
