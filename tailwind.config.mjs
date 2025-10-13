export const content = ['./src/**/*.{html,ts}'];

export const theme = {
  extend: {},
};

export const corePlugins = {
  preflight: false,
};

export const plugins = [require('tailwindcss-primeui')];
