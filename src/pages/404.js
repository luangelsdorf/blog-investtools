import Link from 'next/link';
import Head from 'next/head';
import styles from 'src/styles/scss/404.module.scss';

export default function Custom404() {
  return (
    <>
      <Head>
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