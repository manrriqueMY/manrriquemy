import React from 'react';

const Header = ({ data = {}, language, onLanguageChange, t }) => {
   const { name, occupation, description, social = [] } = data;

   const networks = social.map((network) => <li key={network.name}><a href={network.url} aria-label={network.name}><i className={network.className}></i></a></li>);

   return (
      <header id="home">
         <div className="language-switcher" role="group" aria-label="Language">
            <button type="button" aria-label={t.switchToEnglish} aria-pressed={language === 'en'} onClick={() => onLanguageChange('en')}>
               <span aria-hidden="true">🇺🇸</span> EN
            </button>
            <button type="button" aria-label={t.switchToSpanish} aria-pressed={language === 'es'} onClick={() => onLanguageChange('es')}>
               <span aria-hidden="true">🇪🇸</span> ES
            </button>
         </div>
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title={t.showNavigation}>{t.showNavigation}</a>
            <a className="mobile-btn" href="#home" title={t.hideNavigation}>{t.hideNavigation}</a>
            <ul id="nav" className="nav justify-content-center">
               <li><a className="smoothscroll" href="#home">{t.nav.home}</a></li>
               <li><a className="smoothscroll" href="#about">{t.nav.about}</a></li>
               <li><a className="smoothscroll" href="#resume">{t.nav.resume}</a></li>
               <li><a className="smoothscroll" href="#portfolio">{t.nav.portfolio}</a></li>
               <li><a className="smoothscroll" href="#contact">{t.nav.contact}</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h3><span>{occupation}</span><br />{description}</h3>
               <hr />
               <ul className="social">
                  {networks}
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
