import React from 'react';

const About = ({ data = {}, t }) => {

   const { name = "", bio = "", image = "logo.png", address = {}, phone = "", email = "", resumedownload = "" } = data;
   const { city = "", state = "" } = address;
   const profilepic = "images/" + image;

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>{t.aboutHeading}</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>{t.contactDetails}</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{city}, {state}</span><br />
                        <span>{phone}</span><br />
                        <a href={"mailto:" + email}>{email}</a><br />
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumedownload} target="_blank" rel="noreferrer" className="button"><i className="fas fa-download"></i>{t.downloadResume}</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );

}

export default About;
