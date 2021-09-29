import React from 'react';
import Head from "next/head";
import FilteredPosts from 'src/components/blog/FilteredPosts';

export default function Category({ category }) {

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
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias?slug=${params.category}`);
  const category = await res.json();

  if (category.length < 1) {
    return {
      notFound: true,
    }
  }

  return {
    props: { category },
    revalidate: 5
  }
}