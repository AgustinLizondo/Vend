import { extendTheme } from 'native-base';
import Fonts from './Fonts';

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      100: {
        normal: Fonts.Regular,
      },
      200: {
        normal: Fonts.Regular,
      },
      300: {
        normal: Fonts.Medium,
      },
      400: {
        normal: Fonts.Medium,
      },
      500: {
        normal: Fonts.SemiBold,
      },
      600: {
        normal: Fonts.SemiBold,
      },
      700: {
        normal: Fonts.Bold,
      },
      800: {
        normal: Fonts.Bold,
      },
      900: {
        normal: Fonts.Bold,
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
});

export default theme;
