import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './store/store';
import App from './App';
import "./styles/index.scss"

const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
