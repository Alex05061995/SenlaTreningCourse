import { DefaultTheme } from 'styled-components';

const headerHeaight = '80px';
const footerHeight = '80px';

const theme: DefaultTheme = {
  heights: {
    headerHeight: headerHeaight,
    footerHeight: footerHeight,
    fullHeight: `calc(100vh - (${headerHeaight} + ${footerHeight}))`,
  },
}

export default theme;