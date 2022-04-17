import '../pages.styles/main.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { MediaQueriesProvider } from '@nx-starter/modules/media-queries';

import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MediaQueriesProvider initialData={pageProps}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MediaQueriesProvider>
  );
};

export default App;
