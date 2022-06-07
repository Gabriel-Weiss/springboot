import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Departments from './components/Departments';
import Footer from './components/Footer';
import Header from './components/Header';
import Add from './components/Add';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Departments />} />
          <Route exact path='/department' element={<Departments />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Add />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
