import Head from 'next/head';

import '../pages.styles/main.css';

import { MediaQueriesProvider } from '@root/modules-media-queries';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MediaQueriesProvider initialData={pageProps}>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <main className='app'>
        <Component {...pageProps} />
      </main>
    </MediaQueriesProvider>
  );
};

export default App;
