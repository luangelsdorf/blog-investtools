import React, { useEffect } from 'react';
import styles from './PostCard.module.scss';
import Link from 'next/link';
import { getExerpt } from 'src/utils/modules';

export default function PostCard(props) {

  useEffect(() => {
    if (window.location.pathname.includes('categorias')) {
      document.querySelectorAll('a.body-small:last-child').forEach(el => el.textContent = 'Continuar Lendo »')
    }

    if (window.location.pathname.includes('posts')) {
      document.querySelectorAll('article > div:last-child').forEach(el => el.style.padding = '0 25px')
    }
  }, [])

  return (
    <article className={styles.card}>
      <Link href={props.href}>
        <a className={styles.thumbnail}>
          <div>
            <img src={props.cover} alt="Thumbnail" />
          </div>
        </a>
      </Link>
      <div className={`${styles.badge} caption`}>
        <Link href={`/categorias/${props.category.slug}`}>
          <a>{props.category.name}</a>
        </Link>
      </div>
      <div className={styles.body}>
        <Link href={props.href}>
          <a>
            <h3>{props.title}</h3>
          </a>
        </Link>
        <div className="body-small">
          {props.body ? getExerpt(props.body) : null}
        </div>
        <Link href={props.href}>
          <a className="body-small">Ler Mais</a>
        </Link>
      </div>
    </article>
  )
}