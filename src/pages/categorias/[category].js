import React from 'react';
import Head from "next/head";
import FilteredPosts from 'src/components/blog/FilteredPosts';
import { getLayoutContent } from 'src/utils/modules';
import getLocaleParam from 'src/utils/getLocaleParam';

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

export async function getStaticPaths({ locale }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias/${getLocaleParam(locale)}`)
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params, locale }) {
  let localeParameter = getLocaleParam(locale);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias?slug=${params.category}&_locale=${locale}`);
  const category = await res.json();

  if (category.length < 1) {
    return {
      notFound: true,
    }
  }

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato${localeParameter}`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent(localeParameter);

  return {
    props: { category, contact, layout },
    revalidate: 5
  }
}