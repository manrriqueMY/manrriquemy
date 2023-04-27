import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
//import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import logo from './logo.svg';

const App = () => {

  const [resumeData, setResumeData] = useState(null);

  const getResumeData = async () => {
    const data = await fetch("/resumeData.json").then(res => res.json());
    setResumeData(data);
  }

  useEffect(() => {
    getResumeData();
  }, [])

  return (
    resumeData ?
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        {/*<Testimonials data={resumeData.testimonials}/> */}
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div> : <div className='background'><img src={logo} className='loading' alt='' /></div>
  );
}

export default App;
