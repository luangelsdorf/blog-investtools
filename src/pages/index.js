import React from 'react';
import Head from "next/head";
import BlogHero from "src/components/blog/BlogHero";
import PostList from 'src/components/blog/PostList';
import { getLayoutContent } from 'src/utils/modules';
import getLocaleParam from 'src/utils/getLocaleParam';

export default function Blog({ postList, pageContent }) {

  return (
    <>
      <Head>
        <title>Blog Investtools – Confira Nossos Conteúdos</title>
        <meta name="description" content="Aqui você confere as novidades sobre tudo o que está relacionado com o mercado de capitais, comentários sobre novas tecnologias, entre outros assuntos." />
      </Head>

      <BlogHero content={pageContent} />
      <PostList posts={postList} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  let localeParameter = getLocaleParam(locale);

  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${localeParameter}`);
  const postList = await posts.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato${localeParameter}`);
  const contact = await contactRes.json();

  const content = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-blog${localeParameter}`);
  const pageContent = await content.json();

  const layout = await getLayoutContent(localeParameter);

  return {
    props: { postList, pageContent, contact, layout },
    revalidate: 5
  }
}

