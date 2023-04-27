import React from 'react';

const About = ({ data = {} }) => {

   const { name = "", bio = "", image = "", address = {}, phone = "", email = "", resumedownloadEs = "", resumedownloadEn = "", skype = "" } = data;
   const { street = "", city = "", state = "", zip = "" } = address;
   const profilepic = "images/" + image;

   const onRedirect = () => {
      const language = document.cookie.split("; ").find((row) => row.startsWith("googtrans="))?.split("=")[1] || "";
      if (language.includes("es/en")) {
         window.open(resumedownloadEn, '_blank');
      }
      window.open(resumedownloadEs, '_blank');
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Detalles Contacto</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                           {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span><br />
                        <span>{skype}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a onClick={onRedirect} href="!#" className="button"><i className="fas fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );

}

export default About;
