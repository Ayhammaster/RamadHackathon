import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header  from './components/Header/header';
import HeroSection from './components/Hero/hero';
import FormComponent from './components/Form/ocrForm';
import AboutUs from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Up from './components/Up/up';

import Signup from './components/Authentication/SignUp/signup';
import Login from './components/Authentication/Login/login';
import ReseyPassword from './components/Authentication/reset/reset'

import API_Documentation from './components/docs/Swagger'

import NotFound from './components/Errors/404-NotFound/NotFound';
import InternalServerError from './components/Errors/500-InternalError/InternalServerError';

import PrivacyPolicy from './components/Copyrighting/PrivacyPolicy/privacyPolicy';
import TermsAndConditions from './components/Copyrighting/TermsAndConditions/termsAndConditions';
import IntellectualProperty from './components/Copyrighting/IntellectualProperty/intellectualProperty';

import PopUp from './components/popup/popup'

function App() {

  return (
    <div>  

      <PopUp />

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
            path='/signup' 
            element= {
              <>
                <Header />
                <Signup />
                <Footer />
              </>
          } />
          <Route 
            path='/login' 
            element= {
              <>
                <Header />
                <Login />
                <Footer />
              </>
          } />
          <Route
            path='/reset-password'
            element={
              <>  
                <Header />
                <ReseyPassword />
                <Footer />
              </>
            }
          />
          <Route
            path='/docs'
            element={
              <>  
                <Header />
                <API_Documentation />
                <Footer />
              </>
            }
          />
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
          <Route
            path='/pop'
            element={
              <>  
                <Header />
                <PopUp />
              </>
            }
          />
          <Route path='*' element = {<NotFound />} />
          <Route path='/500' element = {<InternalServerError />} />
        </Routes>
        <Up />
      </BrowserRouter>
    </div>
  );
}

export default App
