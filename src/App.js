import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/apartments/create" element={<CreateApartment />}></Route>
        <Route path="/apartments" element={<ApartmentsList />}></Route>
        <Route path="/apartments/:id" element={<ApartmentDetails />}></Route>
      </Routes>

    </div>
  );
}

export default App;
