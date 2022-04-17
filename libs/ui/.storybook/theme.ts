import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  colorSecondary: '#e01a22',

  brandTitle: '@nx-starter storybook',
  brandUrl: 'https://www.google.com/',
  brandImage: 'https://www.google.com/logo.svg',
});

export default theme;
