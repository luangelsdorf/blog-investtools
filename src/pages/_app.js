import 'public/css/bootstrap.css';
import 'src/styles/styles.scss';
import Layout from "src/layouts/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout content={pageProps.layout} info={pageProps.contact}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
