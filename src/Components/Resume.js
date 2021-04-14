import React, { Component } from 'react';

class Resume extends Component {

  card = (data) => <div className="">
    <div className="text-center">
      {data.title}
    </div>
    <div className="card-body">
      <img alt="" className="" src={"/"+ data.image} />
    </div>
  </div>

  cards = (param) =>  this.props.data.skills[param].map((data, index)=><div key={param+index} className="col-md-3">{this.card(data)}</div>);  

  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
              {work.description.map((item, index) => <li key={"d"+index}> - {item}</li>)}
            </ul>
            <p><strong>Stack:</strong> {work.tecnologies}</p>
        </div>
      })

      var frontends = this.cards("frontends");
      var mobiles = this.cards("mobiles");
      var lenguages = this.cards("lenguages");
      var backends = this.cards("backends");
      var databases = this.cards("databases");
      var devops = this.cards("devops");
      var entornos = this.cards("entornos");

      var skills = <div>
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
        <h1>Opciones del Desarrollador (devops)</h1>
        <div className="row">{devops}</div>
        <h1>Entornos de Desarrollado</h1>
        <div className="row">{entornos}</div>
      </div>
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Educación</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
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
          {work}
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
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
