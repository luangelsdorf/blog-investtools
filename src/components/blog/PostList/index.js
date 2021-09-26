import React from 'react';
import styles from './PostList.module.scss';
import postImg from 'public/images/postimg.jpg';
import Image from 'next/image';
import Decoration from 'src/components/common/Decoration';
import PostCard from '../PostCard';

export default function PostList({ posts }) {
  return (
    <section className={styles.section}>

      <Decoration size="lg" style="normal" className={styles.decor} />

      <div className="container">
        <div className="row gy-5">
          {
            posts.map((post, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={`post-${index}`}>
                  <PostCard
                    cover={`${process.env.NEXT_PUBLIC_API_URL}${post.cover.formats.small.url}`}
                    category={post.categories[0].name}
                    title={post.title}
                    body={post.body}
                    href={`/posts/${post.slug}`}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}