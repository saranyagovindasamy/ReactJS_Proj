import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About  from './pages/AboutPage'
import Contact from './pages/contactus'
import Division  from './pages/DivisionPage'
import Careers from './pages/CareersPage'
import Reels from './pages/ReelsPage'
import Vfx from './pages/VfxPage'
import PreProduction from './pages/PreProductionPage'
import AnimationPage from './pages/AnimationPage'
import AssetPage from './pages/AssetPage'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      
    
    <BrowserRouter>
      <Routes>
     
         <Route path="/" element={< Navbar />} > 
          <Route index element={<About />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/division"  element={<Division />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/vfx" element={<Vfx />} />
          <Route path="/preproduction" element={<PreProduction />} />
          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/asset" element={<AssetPage />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}
  

export default App;
