import React from 'react';
import ShareButton from '../ShareButton';
import styles from './PostBody.module.scss';

export default function PostBody({postContent}) {

  let body = postContent.body;

  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    body = postContent.body.replace('/uploads', `${process.env.NEXT_PUBLIC_API_URL}/uploads`);
  }

  return (
    <div className={styles.body}>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div className={styles.share}>
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-6">
            <h5>Compartilhe esse post</h5>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.socials}>
              <ShareButton type="facebook" />
              <ShareButton type="linkedin" />
              <ShareButton type="twitter" />
              <ShareButton type="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}