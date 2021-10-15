import React from 'react';
import Project from './Project';


function Portfolio() {
  return (
      <section className="row" id="about">
          <div className="heading col-6">
              <h1 className="title">work.</h1>
          </div>
          <div className="col-6">
            <Project />
          </div>
      </section>
  )
}


export default Portfolio;
