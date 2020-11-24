import React from 'react';

import { Button } from 'antd';

import styles from './styles.module.less';

// import './styles.less';
require('./styles.less');

export default function Home() {
  return (
    <div>
      <h1>Button Show</h1>

      <h2>Antd Button:</h2>
      <Button type="primary">Antd</Button>

      <br />
      <br />

      <h2>CSS Button:</h2>
      <button className="g-button">CSS</button>
      <button className="gbutton">GCSS</button>

      <br />
      <br />

      <h2>CSS Module Button:</h2>
      <button className={styles['m-button']}>M-Bodule</button>
    </div>
  );
}
