import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store/store';
import App from './App';
import "./styles/index.scss";

const container = document.getElementById('root') as HTMLElement | null;
if (!container) throw new Error("Root container missing in index.html");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
