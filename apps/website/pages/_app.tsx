import Head from 'next/head';

import '../pages.styles/main.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <main className='app'>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
