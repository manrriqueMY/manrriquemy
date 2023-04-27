import React from 'react';

const Header = ({ data = {} }) => {
   const { name, occupation, description, social } = data;

   const networks = social.map((network) => <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>)

   return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav justify-content-center">
               <li><a className="smoothscroll" href="#home">Inicio</a></li>
               <li><a className="smoothscroll" href="#about">Sobre mí</a></li>
               <li><a className="smoothscroll" href="#resume">Resumen</a></li>
               <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               <li><a className="smoothscroll" href="#contact">Contacto</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h3>Soy <span>{occupation} </span>, {description}.</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
               <ul>
                  <li>
                     <a href="#!" onClick={() => { window.doGTranslate('es|en'); }} title="English" className="gflag nturl" style={{ backgroundPosition: "-0px -0px" }}>
                        <img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="English" />
                     </a>
                     <a href="#!" onClick={() => { window.doGTranslate('es|es'); }} title="Spanish" className="gflag nturl" style={{ backgroundPosition: "-600px -200px" }}>
                        <img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Spanish" />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
   );
}

export default Header;
