import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import logo from './logo.svg';
import translations from './i18n';

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const [language, setLanguage] = useState('en');

  const getResumeData = async () => {
    const data = await fetch('/resumeData.json').then(res => res.json());
    setResumeData(data);
  };

  useEffect(() => {
    getResumeData();
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];
  const localizedData = resumeData?.[language];

  return (
    localizedData ?
      <div className="App">
        <Header
          data={localizedData.main}
          language={language}
          onLanguageChange={setLanguage}
          t={t}
        />
        <About data={localizedData.main} t={t} />
        <Resume data={localizedData.resume} t={t} />
        <Portfolio data={localizedData.portfolio} />
        <Contact data={localizedData.main} t={t} />
        <Footer data={localizedData.main} t={t} />
      </div> : <div className="background"><img src={logo} className="loading" alt="" /></div>
  );
}

export default App;
