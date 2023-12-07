import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './utils/redux/store';
import HomePage from './views/home/Home';
import BoardPage from './views/board/BoardPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/board" element={<BoardPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

