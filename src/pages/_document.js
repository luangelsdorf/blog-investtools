import Document, { Html, Head, Main, NextScript } from 'next/document';
import PageScripts from 'src/components/common/PageScripts';
import { env } from 'src/utils/modules';

class MyDocument extends Document {
  ogTags = {
    title: 'Blog Investtools',
    site_name: 'Blog Investtools',
    url: 'blog.investtools.com.br',
    description: 'A Investtools é uma empresa com foco nas melhores soluções de tecnologia para o mercado financeiro.',
    type: 'website',
    image: '/images/comp-Investtools.jpg',
  }

  render() {
    return (
      <Html>
        <Head>
          <PageScripts />
          {/*Metadata*/}
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="HandHeldFriendly" content="True" />
          {/*OG Tags*/}
          <meta property="og:title" content={this.ogTags.title} />
          <meta property="og:site_name" content={this.ogTags.site_name} />
          <meta property="og:url" content={this.ogTags.url} />
          <meta property="og:description" content={this.ogTags.description} />
          <meta property="og:type" content={this.ogTags.type} />
          <meta property="og:image" content={this.ogTags.image} />
          {/*Favicon*/}
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
          <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          {/*MISC.*/}
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/bootstrap.bundle.min.js" />
          {
            env === 'dev' ? null : (
              <>
                <meta name="adopt-website-id" content="1d12a76e-f881-429d-8c86-0c2a876746b7" />
                <script src="//tag.goadopt.io/injector.js?website_code=1d12a76e-f881-429d-8c86-0c2a876746b7" className="adopt-injector" />
              </>
            )
          }
        </body>
      </Html>
    )
  }
}

export default MyDocument