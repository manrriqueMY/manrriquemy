import React from 'react';

const Portfolio = ({ data = {} }) => {
  const projects = data.projects.map((projects) => {
    const projectImage = 'images/portfolio/' + projects.image;

    return <div key={projects.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a href={projects.url} title={projects.title}>
          <img alt={projects.title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
              <p>{projects.category}</p>
            </div>
          </div>
          <div className="link-icon"><i className="fas fa-link"></i></div>
        </a>
      </div>
    </div>
  })

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Debido a trabajar con Backend, no puedo publicar código fuente, pero si unos demos.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
