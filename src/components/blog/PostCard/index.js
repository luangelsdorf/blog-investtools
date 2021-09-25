import React, { useEffect } from 'react';
import styles from './PostCard.module.scss';

export default function PostCard(props) {

  // retorna o resumo sem tags html e com 20 palavras
  const getExerpt = () => props.body.split(' ').slice(0, 20).join(' ').replace(/(<([^>]+)>)/gi, "")

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
        <div className="body-small">
          { getExerpt() }
        </div>
        <a className="body-small" href={props.href}>Ler Mais</a>
      </div>
    </article>
  )
}