import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header';
import Home from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
