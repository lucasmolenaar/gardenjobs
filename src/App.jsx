import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LandscapingPage from './pages/LandscapingPage';
import MaintenancePage from './pages/MaintenancePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/over-ons' element={<AboutPage />} />

        <Route path='/tuinaanleg' element={<LandscapingPage />} />

        <Route path='/onderhoud' element={<MaintenancePage />} />

        <Route path='/contact' element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
