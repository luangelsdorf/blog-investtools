import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import PostBody from "src/components/blog/PostBody";
import PostHero from "src/components/blog/PostHero";
import RelatedPosts from "src/components/blog/RelatedPosts";
import { getExerpt, getRelatedPosts } from "src/utils/modules";

export default function BlogPost({ thisPost, relatedPosts }) {

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>
          {`${thisPost[0].title} - Blog Investtools`}
        </title>
        <meta name="description" content={getExerpt(thisPost[0].body)} />
      </Head>
      <PostHero postContent={thisPost[0]} />
      <PostBody postContent={thisPost[0]} />
      <RelatedPosts relatedPosts={relatedPosts} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`)
  const allPosts = await res.json();
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
  const allPosts = await res.json();
  const thisPost = allPosts.filter(post => post.slug === params.slug);

  if (thisPost.length < 1) {
    return {
      notFound: true,
    }
  }

  const relatedPosts = getRelatedPosts(thisPost[0], allPosts);

  return {
    props: { thisPost, relatedPosts },
    revalidate: 5
  }
}