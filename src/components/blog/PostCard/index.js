import React from 'react';
import styles from './PostCard.module.scss';

export default function PostCard(props) {
  return (
    <article className={styles.card}>
      <a href={props.href} className={styles.thumbnail}>
        <div>
          <img src={props.cover} alt="Thumbnail" />
        </div>
      </a>
      <div className={`${styles.badge} caption`}>
        {props.category}
      </div>
      <div className={styles.body}>
        <a href={props.href}><h3>{props.title}</h3></a>
        <div className="body-small">{props.exerpt}</div>
        <a className="body-small" href={props.href}>Ler Mais</a>
      </div>
    </article>
  )
}