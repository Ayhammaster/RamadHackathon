import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header  from './components/Header/header';
import HeroSection from './components/Hero/hero';
import FormComponent from './components/Form/ocrForm'
import AboutUs from './components/About/about'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';

import NotFound from './components/Errors/404-NotFound/NotFound';
import InternalServerError from './components/Errors/500-InternalError/InternalServerError';

import PrivacyPolicy from './components/Copyrighting/PrivacyPolicy/privacyPolicy';
import TermsAndConditions from './components/Copyrighting/TermsAndConditions/termsAndConditions';
import IntellectualProperty from './components/Copyrighting/IntellectualProperty/intellectualProperty';

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
          <Route 
            path='/privacy-policy' 
            element= {
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
          } />
          <Route
            path='/terms-and-conditions'
            element={
              <>  
                <Header />
                <TermsAndConditions />
                <Footer />
              </>
            }
          />
          <Route
            path='/intellectual-property'
            element={
              <>  
                <Header />
                <IntellectualProperty />
                <Footer />
              </>
            }
          />
          <Route path='*' element = {<NotFound />} />
          <Route path='/500' element = {<InternalServerError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
