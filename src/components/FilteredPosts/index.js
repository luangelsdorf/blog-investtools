import React from 'react';
import PostCard from '../blog/PostCard';
import Decoration from '../common/Decoration';
import styles from './FilteredPosts.module.scss';

export default function FilteredPosts({ category }) {
  return (
    <section className={styles.section}>

      <Decoration size="lg" style="normal" className={styles.decor} />

      <div>
        <h1>{category[0].name}</h1>
        <div className="container">
          <div className="row">
            {
              category[0].posts.map((post, index) => {
                return (
                  <div className="col-12 col-lg-6" key={`post-${index}`}>
                    <PostCard
                      cover={`${process.env.NEXT_PUBLIC_API_URL}${post.cover.formats.small.url}`}
                      category={category[0].name}
                      title={post.title}
                      href={`/posts/${post.slug}`}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}