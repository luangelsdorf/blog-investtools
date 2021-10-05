import React from 'react';
import styles from './BlogHero.module.scss';
import BlogImage from "../BlogImage";

export default function BlogHero({ content }) {
  return (
    <section className={styles.section}>
      <div className={`${styles.shape} d-none d-lg-block`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M738,99l262-93V0H0v5.6L738,99z"/>
        </svg>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className={styles.heroText}>
              <h3>{content.title}</h3>
              <h1>{content.subtitle}</h1>
              <span>{content.text}</span>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block">
            <BlogImage image={content.image.url} />
          </div>
        </div>
      </div>
    </section>
  )
}