import React from 'react';

const styles = {
    a: {
        textDecoration: 'none',
        color: 'rgb(225, 182, 52)',
    }
}


function Project() {

    const projects = [
        {
            title: 'onTrack',
            image: 'onTrack.png',
            imageAlt: 'image of app',
            github: 'https://github.com/candiceywu/onTrack',
            deployedUrl: 'https://peaceful-brook-31627.herokuapp.com/',
            id: 1
        },
        {
            title: 'Job Search',
            image: 'job-search.png',
            imageAlt: 'image of app',
            github: 'https://github.com/Kimberly-Rodriguez/job-search',
            deployedUrl: 'https://kimberly-rodriguez.github.io/job-search/',
            id: 2
        },
        {
            title: 'Weather Dashboard',
            image: 'weatherdashboard.png',
            imageAlt: 'image of app',
            github: 'https://github.com/candiceywu/weather-dashboard',
            deployedUrl: 'https://candiceywu.github.io/weather-dashboard/',
            id: 3
        },
        {
            title: 'My Daily Planner',
            image: 'mydailyplanner6.png',
            imageAlt: 'image of app',
            github: 'https://github.com/candiceywu/my-daily-planner',
            deployedUrl: 'https://candiceywu.github.io/my-daily-planner/',
            id: 4
        },
        {
            title: 'Note Taker',
            image: 'notetaker3.png',
            imageAlt: 'image of app',
            github: 'https://github.com/candiceywu/note-taker',
            deployedUrl: 'https://fierce-lowlands-57764.herokuapp.com/',
            id: 5
        },
        {
            title: 'Password Generator',
            image: 'securepasswordgenerator.png',
            imageAlt: 'image of app',
            github: ' https://github.com/candiceywu/secure-password-generator',
            deployedUrl: 'https://candiceywu.github.io/secure-password-generator/',
            id: 6
        }
    ];


    return (
        <section className="project font-link">
            <div className="row">
                <div className="project">
                    {projects.map((project) => (
                        <div key={project.id} className="project-img">
                            <h2 className="project-title">{project.title}</h2>
                            <div className="project-links">
                            <a style={styles.a} className="github-link" target="_blank" rel="noreferrer" href={project.github}>github.</a>
                            <a style={styles.a} className="deployed-link" target="_blank" rel="noreferrer" href={project.deployedUrl}>application.</a>
                            </div>
                            <img src={require(`../assets/images/${project.image}`).default} alt={project.imageAlt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Project;