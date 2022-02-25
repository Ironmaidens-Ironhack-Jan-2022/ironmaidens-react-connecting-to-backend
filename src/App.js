import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
import ApartmentsList from './components/ApartmentsList';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/apartments" element={<ApartmentsList />}></Route>
      </Routes>

    </div>
  );
}

export default App;
