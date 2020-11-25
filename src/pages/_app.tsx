import React from 'react';

import '@/styles/globals.less';
import '@/pages/styles-css.css';

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
