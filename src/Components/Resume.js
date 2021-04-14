import React from 'react';

const skillImages = {
  languages: {
    PHP: '/images/languages/php.png',
    Java: '/images/languages/java.png',
    JavaScript: '/images/languages/js.png',
    TypeScript: '/images/languages/ts.png',
    'C#': '/images/languages/cs.png',
    Dart: '/images/languages/dart.png',
    Python: '/images/languages/python.png',
    Ruby: '/images/languages/ruby.png'
  },
  backend: {
    'Node.js': '/images/devops/node.png',
    Express: '/images/backends/express.png',
    'Spring Boot': '/images/backends/spring.png',
    '.NET Core': '/images/backends/netcore.png',
    Laravel: '/images/backends/laravel.png',
    Flask: '/images/backends/flask.png',
    FastAPI: '/images/backends/fastapi.png'
  },
  frontend: {
    'React.js': '/images/frontends/react.png',
    Angular: '/images/frontends/angular.png',
    'Vue.js': '/images/frontends/vue.png',
    'Svelte / SvelteKit': '/images/frontends/svelte.png'
  },
  databases: {
    MySQL: '/images/databases/mysql.png',
    MSSQL: '/images/databases/sqlserver.png',
    PostgreSQL: '/images/databases/postgre.png',
    Oracle: '/images/databases/oracle.png',
    MongoDB: '/images/databases/mongo.png',
    DynamoDB: '/images/databases/dynamodb.png'
  },
  mobile: {
    'React Native': '/images/mobiles/reactnative.png',
    Flutter: '/images/mobiles/flutter.png',
    Ionic: '/images/mobiles/ionic.png'
  },
  cloudServices: {
    AWS: '/images/devops/aws.png',
    'AWS (Lambda, S3, Amplify, EC2, CloudWatch)': '/images/devops/aws.png',
    Azure: '/images/devops/azure.png',
    Docker: '/images/devops/docker.png',
    Git: '/images/devops/git.png',
    Heroku: '/images/devops/heroku.png'
  }
};

const Resume = ({ data = {}, t }) => {
  const { skills = {}, skillmessage = "", education = [], work = [], languages = [] } = data;

  const educations = education.map((item) => (
    <div key={item.school}>
      <h3>{item.degree}</h3>
      <p className="info">{item.school}<span>&bull;</span><em className="date">{item.location}</em></p>
    </div>
  ));
  const works = work.map((item) => (
    <div key={item.company + item.title}>
      <h3>{item.title}</h3>
      <p className="info">{item.company}, {item.location}<span>&bull;</span><em className="date">{item.years}</em></p>
      <ul>
        {item.description.map((description, index) => <li key={item.company + index}>{description}</li>)}
      </ul>
      <p><strong>{t.technologies}:</strong> {item.technologies}</p>
    </div>
  ));

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>{t.education}</span></h1>
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
          <h1><span>{t.experience}</span></h1>
          <div>{t.relevantExperience}</div>
        </div>

        <div className="nine columns main-col">
          {works}
        </div>
      </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>{t.skills}</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}
          </p>

          <div className="skill-groups">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h3>{t.skillCategories[category]}</h3>
                <ul className="skill-tags">
                  {items.map((item) => (
                    <li key={item}>
                      {skillImages[category]?.[item] && <img className="skill-icon" src={skillImages[category][item]} alt="" />}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row languages">
        <div className="three columns header-col">
          <h1><span>{t.languages}</span></h1>
        </div>
        <div className="nine columns main-col">
          <ul>
            {languages.map((item) => <li key={item.language}><strong>{item.language}:</strong> {item.proficiency}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
