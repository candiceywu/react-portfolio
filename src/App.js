import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './assets/css/fonts.css';

function App() {
  return (
    <div>
      <a name="Header"></a>
      <Header />
      <a name="About"></a>
      <About />
      <a name="Portfolio"></a>
      <Portfolio />
      <a name="Contact"></a>
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
