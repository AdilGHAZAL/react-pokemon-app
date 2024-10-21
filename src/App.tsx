import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PokemonCategoryPage from './pages/PokemonCategoryPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<PokemonCategoryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
