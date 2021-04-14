import React from 'react';

const Footer = ({ data = {}, t }) => {
  const networks = data.social.map((network) => <li key={network.name}><a href={network.url} aria-label={network.name}><i className={network.className}></i></a></li>);

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title={t.backToTop} aria-label={t.backToTop} href="#home"><i className="fas fa-chevron-up"></i></a></div>
      </div>
    </footer>
  );
}


export default Footer;
