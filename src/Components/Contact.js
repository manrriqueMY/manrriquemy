import React from 'react';

const Contact = ({ data = {} }) => {
   const { name = "", address = {}, email = "", message = "", phone = "" } = data;
   const { street = "", city = "", state = "", zip = "" } = address;

   return (
      <section id="contact">
         <div className="row section-head">
            <div className="ten columns">
               <p className="lead">{message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <div className='d-flex align-items-center flex-wrap'>
                  <h1>.</h1>
                  <div>
                     <a href={"mailto:" + email}>Clic Aqui </a> para enviarme un correo a <a href={"mailto:" + email}> {email}</a>
                  </div>
               </div>
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Dirección y teléfono</h4>
                  <p className="address">
                     {name}<br />
                     {street} <br />
                     {city}, {state} {zip}<br />
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
