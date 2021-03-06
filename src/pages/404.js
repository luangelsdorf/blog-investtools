import Link from 'next/link';
import Head from 'next/head';
import styles from 'src/styles/scss/errorPage.module.scss';
import { getLayoutContent } from 'src/utils/modules';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Esta página não foi encontrada.</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className={styles.notfound}>
        <div>
          <h1>404</h1>
          <h2>Esta página não foi encontrada.</h2>
        </div>
        <div>
          <Link href="/">
            <h4>
              <a>← Volar à página inicial</a>
            </h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { layout, contact },
    revalidate: 5,
  }
}