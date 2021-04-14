import React from 'react';

const Contact = ({ data = {}, t }) => {
   const { name = "", address = {}, email = "", contactmessage = "", phone = "" } = data;
   const { city = "", state = "" } = address;

   return (
      <section id="contact">
         <div className="row section-head">
            <div className="ten columns">
               <p className="lead">{contactmessage}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <div className='d-flex align-items-center flex-wrap'>
                  <div>
                     <a href={"mailto:" + email}>{t.emailLink}</a> {t.emailPrompt} <a href={"mailto:" + email}>{email}</a>
                  </div>
               </div>
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>{t.addressAndPhone}</h4>
                  <p className="address">
                     {name}<br />
                     {city}, {state}<br />
                     <span>{phone}</span><br></br>
                     {email}
                  </p>
               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;
