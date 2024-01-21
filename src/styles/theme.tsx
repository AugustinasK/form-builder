export const palette = {
  background: '#ffffff',
  black: '#1a1a1a',
  gray: '#f7f7f7',
  primary: '#275add',
  faded: '#eaeffe',
  error: '#ff0000',
};

export const theme = {
  responsive: {
    xs: '320px',
    sm: '640px',
    md: '860px',
    lg: '1280px',
    xl: '1800px',
  },
  colors: {
    button: {
      primary: palette.primary,
    },
    form: {
      input: {
        background: palette.gray,
      },
      error: palette.error,
      removeField: palette.faded,
    },
  },
};
