import React from 'react';
import styles from './RelatedPosts.module.scss';
import Decoration from 'src/components/common/Decoration';
import PostCard from '../PostCard';
import Link from 'next/link';

export default function RelatedPosts({ relatedPosts }) {

  return (
    <section className={styles.section}>

      <Decoration size="lg" style="normal" className={styles.decorLeft} />
      <Decoration size="xs" style="normal" className={styles.decorRight} />

      <div className="container">
        <div className={styles.title}>
          <h3>Posts Relacionados</h3>
          <Link href="/">
            <a className="d-none d-lg-block">Ver Todos</a>
          </Link>
        </div>
        <div className="row">
          {
            relatedPosts.map((post, index) => {
              return (
                <div className="col-12 col-md-12 col-lg-6" key={`post-${index}`}>
                  <PostCard
                    cover={`${process.env.NEXT_PUBLIC_API_URL}${post.cover.formats.small.url}`}
                    category={post.categories[0]}
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