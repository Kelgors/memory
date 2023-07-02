import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import messages from './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';

const language = navigator.language.split(/[-_]/)[0];
const currentLanguageMessages = messages[language] || messages.en;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={currentLanguageMessages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
  navigator.serviceWorker.register('/sw.js');
}
