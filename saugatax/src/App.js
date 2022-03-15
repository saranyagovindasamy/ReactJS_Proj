import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route,useParams} from "react-router-dom"
import Home  from './pages/Home/Home.js'
import About  from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blogs  from './pages/Blogs/Blogs'
import Services  from './pages/Services/Services'
import Location from './pages/Location/Location'
import Customer from './pages/Customer/Customer'
import Personaltax from './pages/personaltax'
import React from 'react'

import Footer from './components/Footer'
function App() {
  
  return (
    <div className="App">
      
    
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={< Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" pathname="/about" exact element={<About />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/location" element={<Location />} />
          <Route path="/customer" element={<Customer />} />
        <Route path="/personaltax" element={<Personaltax/>} />
        </Route>
     
      </Routes>
      <div className='mt-10'>
        <Footer />
         </div>    
    </BrowserRouter>
 
    </div>
  );
}

export default App;
