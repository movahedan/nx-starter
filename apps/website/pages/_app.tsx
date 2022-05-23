import '../pages.styles/main.css';

import Head from 'next/head';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle, fontLinksProps } from '@nx-starter/ui';

import { MediaQueriesProvider } from '@nx-starter/modules/media-queries';
import { ComposeProviders } from '@nx-starter/utilities-react';

import type { AppWithLayoutProps } from 'next/app';

const App = ({ Component, pageProps }: AppWithLayoutProps) => {
  const { Component: Layout = Fragment, props: lProps = {} } =
    Component.Layout || {};
  const layoutProps = typeof lProps === 'function' ? lProps(pageProps) : lProps;

  return (
    <>
      <IndependentProviders />
      <ComposeProviders
        providers={[
          <MediaQueriesProvider key='0' initialData={pageProps} />,
          <ThemeProvider key='1' theme={theme} />,
        ]}
      >
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </ComposeProviders>
    </>
  );
};

const IndependentProviders = () => (
  <>
    <GlobalStyle />
    <Head>
      {fontLinksProps.map((props, index) => (
        <link key={index} {...props} />
      ))}
    </Head>
  </>
);

export default App;
