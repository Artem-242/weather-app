import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { mainStore } from './store/store';
import { AuthProvider } from './contexts/authContexts/AuthProvider';

const rootElement = document.getElementById('root');
if (rootElement) {
   createRoot(rootElement).render(
      <React.StrictMode>
         <Provider store={mainStore}>
            <AuthProvider>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </AuthProvider>
         </Provider>
      </React.StrictMode>
   );
} else {
   console.error('Root element not found');
}
