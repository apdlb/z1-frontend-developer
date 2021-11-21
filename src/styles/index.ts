import { createGlobalStyle } from 'styled-components';
import RobotoBlackTtf from '../assets/fonts/Roboto-Black.ttf';
import RobotoBlackItalicTtf from '../assets/fonts/Roboto-BlackItalic.ttf';
import RobotoBoldTtf from '../assets/fonts/Roboto-Bold.ttf';
import RobotoBoldItalicTtf from '../assets/fonts/Roboto-BoldItalic.ttf';
import RobotoItalicTtf from '../assets/fonts/Roboto-Italic.ttf';
import RobotoLightTtf from '../assets/fonts/Roboto-Light.ttf';
import RobotoLightItalicTtf from '../assets/fonts/Roboto-LightItalic.ttf';
import RobotoMediumTtf from '../assets/fonts/Roboto-Medium.ttf';
import RobotoMediumItalicTtf from '../assets/fonts/Roboto-MediumItalic.ttf';
import RobotoRegularTtf from '../assets/fonts/Roboto-Regular.ttf';
import RobotoThinTtf from '../assets/fonts/Roboto-Thin.ttf';
import RobotoThinItalicTtf from '../assets/fonts/Roboto-ThinItalic.ttf';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    min-height: 100vh;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    background: none;
    color: #fff;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackItalicTtf}) format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalicTtf}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalicTtf}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightItalicTtf}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumItalicTtf}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinItalicTtf}) format('truetype');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }
`;

export default GlobalStyle;
