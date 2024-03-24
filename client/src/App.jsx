import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header  from './components/Header/header';
import HeroSection from './components/Hero/hero';
import FormComponent from './components/Form/ocrForm'
import AboutUs from './components/About/about'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element= {
              <>
                <Header />
                <HeroSection />
                <FormComponent />
                <Footer />
              </>
          } />
          <Route 
            path='/about-us' 
            element= {
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
          } />
          <Route 
            path='/chatting' 
            element= {
              <>
                <Header />
                <Contact />
                <Footer />
              </>
          } />
          <Route path='*' element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
