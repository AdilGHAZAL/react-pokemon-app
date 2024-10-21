import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PokemonCategoryPage from './pages/PokemonCategoryPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<PokemonCategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
