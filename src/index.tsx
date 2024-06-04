import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./Store/store";


const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
