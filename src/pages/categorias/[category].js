import React from 'react';
import Head from "next/head";
import FilteredPosts from 'src/components/blog/FilteredPosts';
import { useRouter } from 'next/router';

export default function Category({ category }) {

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>
        {`${category[0].name} - Blog Investtools`}
        </title>
      </Head>
      <FilteredPosts category={category} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias/`)
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias?slug=${params.category}`);
  const category = await res.json();

  return {
    props: { category },
    revalidate: 5
  }
}