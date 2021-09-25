import React from 'react';
import Head from "next/head";
import BlogHero from "src/components/blog/BlogHero";
import PostList from 'src/components/blog/PostList';

export default function Blog({ postList }) {

  return (
    <>
      <Head>
        <title>Blog Investtools – Confira Nossos Conteúdos</title>
      </Head>

      <BlogHero />
      <PostList posts={postList} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  const postList = await posts.json();

  return {
    props: { postList }
  }
}
