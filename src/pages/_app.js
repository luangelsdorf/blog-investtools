import 'public/css/bootstrap.css';
import 'src/styles/styles.scss';
import Layout from "src/layouts/Layout";
import Head from "next/head";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageView } from 'src/utils/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      pageView(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
