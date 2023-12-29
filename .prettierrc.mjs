/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro, *.jsx, *.js, *.ts, *.tsx',
      options: {
        parser: 'astro',
      },
    },
  ],
};
