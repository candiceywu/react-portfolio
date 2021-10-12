import React, { useState } from 'react';

// import Home from './pages/Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Project from './Project';
import Portfolio from './Portfolio';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Navigation') {
      return <Navigation />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Header') {
      return <Header />;
    }
    if (currentPage === 'Footer') {
      return <Footer />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Portfolio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
