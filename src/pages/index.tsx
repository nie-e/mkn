import React from 'react';

import { Button } from 'antd';

import styles from './styles.module.less';
// import './styles.less';
require('./styles.less');

export default function Index() {
  return (
    <div className={styles['page-index-wrapper']}>
      <div className={styles['page-index-inner']}>
        <div className={styles['title']}>Next.js CSS (module) + less + Antd</div>

        <Button type="primary" ghost size="large">
          Antd Button
        </Button>
        <br />
        <br />
        <button className="gbutton">CSS Button</button>
        <br />
        <br />
        <button className={styles['m-button']}>CSS Module Bodule</button>
      </div>
    </div>
  );
}
