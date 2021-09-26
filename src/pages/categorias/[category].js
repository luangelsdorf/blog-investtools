import React from 'react';
import FilteredPosts from 'src/components/blog/FilteredPosts';

export default function Category({ category }) {
  return (
    <FilteredPosts category={category} />
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias/`)
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias?slug=${params.category}`);
  const category = await res.json();

  return {
    props: { category }
  }
}