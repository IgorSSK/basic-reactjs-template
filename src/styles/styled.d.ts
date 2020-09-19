import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      transparent: string;
      black: string;
      white: string;

      background: string;
      primary: string;
      primaryLight: string;
      secondary: string;
      // highlight: string;
      info: string;
      success: string;
      danger: string;
      warning: string;
      text: string;
      color: string;
      colorDark: string;
      colorLight: string;
    };

    fontSizes: {
      full: string;
      xs: string;
      sm: string;
      md: v;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };

    fontWeights: {
      normal: integer;
      medium: integer;
      bold: integer;
    };

    lineHeights: {
      normal: string;
      none: string;
      shorter: string;
      short: string;
      base: string;
      tall: string;
      taller: string;
    };

    letterSpacings: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };

    breakpoints: string[];

    space: {
      px: string;
      '0': string;
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '8': string;
      '10': string;
      '12': string;
      '16': string;
      '20': string;
      '24': string;
      '32': string;
      '40': string;
      '48': string;
      '56': string;
      '64': string;
    };

    zIndices: {
      hide: integer;
      auto: string;
      base: integer;
      docked: integer;
      dropdown: integer;
      sticky: integer;
      banner: integer;
      overlay: integer;
      modal: integer;
      popover: integer;
      skipLink: integer;
      toast: integer;
      tooltip: integer;
    };

    elevation: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      13: string;
      14: string;
      15: string;
    };
  }
}
