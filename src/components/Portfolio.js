import React from 'react';
import Project from './Project';


function Portfolio() {
  return (
    <section className="portfolio font-link">
      <div className="row">
        <div className="heading col-6">
          <h1>work.</h1>
        </div>
        <div className="col-6">
          <Project />
        </div>
      </div>
    </section>
  )
}


export default Portfolio;
