import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom'
import router from './routes';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className='flex justify-center bg-[#F8F8FB] min-h-screen'>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
