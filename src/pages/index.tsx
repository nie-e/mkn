import React from 'react';

import { Button } from 'antd';

import lessModuleStyles from './styles-less.module.less';
import cssModuleStyles from './styles-css.module.css';

// ⚠️
// if you need to import the global.css (e.g. style.css), you can write in `app.tsx`,
// if you need to import the global.less (e.g. style.less), you can use `require` syntax,
require('@/pages/styles-less.less');

export default function Index() {
  return (
    <div className={lessModuleStyles['page-index-wrapper']}>
      <div className={lessModuleStyles['page-index-inner']}>
        <div className={lessModuleStyles['title']}>Next.js 10 CSS / Less Module</div>

        <h2>Antd:</h2>
        <Button type="primary" ghost size="large">
          Antd
        </Button>

        <div className="line" />

        <h2>CSS:</h2>

        <button className="css-button">CSS</button>
        <button className={cssModuleStyles['css-module-button']}>CSS Module</button>

        <div className="line" />

        <h2>Less:</h2>

        <button className="less-button">Less</button>
        <button className={lessModuleStyles['less-module-button']}>Less Module</button>
      </div>
    </div>
  );
}
