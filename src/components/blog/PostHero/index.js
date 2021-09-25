import React from 'react';
import styles from './PostHero.module.scss';

export default function PostHero({ postContent }) {

  function formatCategories() {
    let categories = [];
    postContent.categories.map(category => {
      categories.push(category.name);
    });
    return categories.join(', ')
  }

  return (
    <section className={styles.section} style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${postContent.cover.url})`}}>
      <div className="container">
        <div className={styles.heroText}>
          <h1>{postContent.title}</h1>
          <div>
            <img height="17" width="17" src="/images/new/tags.svg" alt="Tags" />
            <span className="caption-upper">
              {
                formatCategories()
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}