import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
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
