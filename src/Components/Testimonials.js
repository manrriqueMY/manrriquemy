import React, { Component } from 'react';

const Testimonials = ({ data }) => {

   const testimonials = data.testimonials.map((testimonials) => {
      return <li key={testimonials.user}>
         <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
         </blockquote>
      </li>
   })


   return (
      <section id="testimonials">
         <div className="text-container">
            <div className="row">
               <div className="two columns header-col">
                  <h1><span>Client Testimonials</span></h1>
               </div>
               <div className="ten columns flex-container">
                  <ul className="slides">
                     {testimonials}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Testimonials;
