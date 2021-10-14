import React from 'react';
import Portfolio from './Portfolio';

const projects = [
    {
        title: '',
        imageSrc: '',
        imageAlt: '',
        github: '',
        deployedUrl: '',
        id: 1
    },
    {
        title: '',
        imageSrc: '',
        imageAlt: '',
        github: '',
        deployedUrl: '',
        id: 2
    },
    {
        title: '',
        imageSrc: '',
        imageAlt: '',
        github: '',
        deployedUrl: '',
        id: 3
    },
    {
        title: '',
        imageSrc: '',
        imageAlt: '',
        github: '',
        deployedUrl: '',
        id: 4
    },
    {
        title: '',
        imageSrc: '',
        imageAlt: '',
        github: '',
        deployedUrl: '',
        id: 5
    },
    {
        title: '',
        imageSrc: '',
        imageAlt: '',
        github: '',
        deployedUrl: '',
        id: 6
    }
]

function Project() {
    return (
        <div className="container">
            <div>
            <h2>projects.</h2>
            </div>
          <div>
              {projects.map((project) = (
                  <Portfolio title={projects.title} key={projects.id} imageSrc={projects.imageSrc} imageAlt={projects.imageAlt} github={projects.github} deployedUrl={projects.deployedUrl}/>
              ))}
          </div>



        </div>
    )
}

export default Project;