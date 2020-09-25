import React from 'react';
import { retry } from './utils/helper';

const Canvas = React.lazy(() => retry(() => import('./containers/Canvas')));

const Statistics = React.lazy(() =>
  retry(() => import('./containers/Statistics'))
);

const routes = [
  { path: '/', exact: true, name: 'Canvas', component: Canvas },
  {
    path: '/statistics',
    exact: true,
    name: 'statistics',
    component: Statistics,
  },
];

export default routes;
