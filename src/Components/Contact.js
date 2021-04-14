import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">


            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <h1><a href={"mailto:"+email}>Clic Aqui</a> para envia correo a <a href={"mailto:"+email}>{email}</a></h1>

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
               {/*
               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#!">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#!">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#!">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#!">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>*/}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
