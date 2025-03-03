import React from 'react';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock(): React.ReactElement {
  return (
    <div className={styles.root}>
      <h1>
        <span>☹️</span>
        <br></br>
        Ні чого не знайдено
      </h1>
      <p className={styles.description}>Ця сторінка порожня</p>
    </div>
  );
}

export default NotFoundBlock;
