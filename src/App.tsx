import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyBooksList from './pages/MyBooksList';
import MegaMenu from './components/MegaMenu';
import Home from './components/Home';

function App() {
  return (
    <div >
      <header >
        <h1>My library:</h1>
      </header>
      <div>

        <BrowserRouter>
          <MegaMenu />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='mybookslist' element={<MyBooksList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
