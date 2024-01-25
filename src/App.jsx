import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FaqPages from './pages/FaqPages';
import MaintancePage from './pages/MaintancePage';
import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={HomePage} /> 
      <Route path="/faq" Component={FaqPages} />
      <Route path="/maintance" Component={MaintancePage} />
    </Routes>
    <FooterComponent />
  </div>
}

export default App
