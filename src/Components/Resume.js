import React from 'react';

const Card = ({ title, image }) => <div className="">
  <div className="text-center">
    {title}
  </div>
  <div className="card-body">
    <img alt="" className="" src={"/" + image} />
  </div>
</div>

const Resume = ({ data = {} }) => {
  const { skills = {}, skillmessage = "", education = [], work = [] } = data;

  const cards = (param) => skills[param].map((data, index) => <div key={param + index} className="col-md-3">{Card(data)}</div>);

  const educations = education.map(function (education) {
    return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
  })
  const works = work.map((work) => {
    return <div key={work.company}><h3>{work.company}</h3>
      <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      <ul>
        {work.description.map((item, index) => <li key={"d" + index}> - {item}</li>)}
      </ul>
      <p><strong>Stack:</strong> {work.tecnologies}</p>
    </div>
  });

  const frontends = cards("frontends");
  const mobiles = cards("mobiles");
  const lenguages = cards("lenguages");
  const backends = cards("backends");
  const databases = cards("databases");
  const devops = cards("devops");
  const entornos = cards("entornos");

  const allSkills = <div>
    <h1>FrontEnd</h1>
    <div className="row">{frontends}</div>
    <h1>Mobiles</h1>
    <div className="row">{mobiles}</div>
    <h1>Lenguages de Programación</h1>
    <div className="row">{lenguages}</div>
    <h1>BackEnd</h1>
    <div className="row">{backends}</div>
    <h1>Bases de Datos</h1>
    <div className="row">{databases}</div>
    <h1>Opciones de Desarrollo</h1>
    <div className="row">{devops}</div>
    <h1>Entornos de Desarrollado</h1>
    <div className="row">{entornos}</div>
  </div>

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Educación</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {educations}
            </div>
          </div>
        </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Experiencia </span></h1>
          <div>( Relevante ) , Todo lo que he trabajado es una lista muy larga</div>
        </div>

        <div className="nine columns main-col">
          {works}
        </div>
      </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Habilidades</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}
          </p>

          <div className="">
            <ul className="skills">
              {allSkills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
