import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from '@web-pages';
import './index.css';
import './i18next';

ReactDOM.render(
  <Suspense fallback={<div>Loading ~....</div>}>
    <HomePage />
  </Suspense>,
  document.getElementById('root'),
);
