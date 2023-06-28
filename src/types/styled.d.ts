import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    heights: {
      headerHeight: string,
      footerHeight: string ,
      fullHeight: string,
    }
  }
}