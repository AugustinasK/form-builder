import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    responsive: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      button: {
        primary: string;
      };
      form: {
        input: {
          background: string;
        };
        error: string;
        removeField: string;
      };
    };
  }
}
