import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ListView from './ListView';

render(
  <AppContainer>
    <ListView />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./ListView', () => {
    const NextApp = require('./ListView').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
