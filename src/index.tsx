import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux/es/exports';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
