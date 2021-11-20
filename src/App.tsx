import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './containers/Views/Home';
import GlobalStyle from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
