import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './i18n';
import { CreditsPage } from './pages/credits/CreditsPage';
import { EndPage } from './pages/end';
import { HomePage } from './pages/home';
import { PlayPage } from './pages/play';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/end" element={<EndPage />} />
          <Route path="/credits" element={<CreditsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
