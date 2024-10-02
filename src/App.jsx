import React, { useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import myPhoto from './assets/images/kalyani.jpg';
import { about, skills, projects, name, description, githubUrl, linkedinUrl, address } from './constants';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  


  
  
 

  return (
    <div className="app">
      <Header
        photo={myPhoto}
        name={name}
        description={description}
      />
      <div className="body-container">
        <nav className="nav">
          <button onClick={() => setActiveSection('about')}>About Me</button>
          <button onClick={() => setActiveSection('skills')}>Skills</button>
          <button onClick={() => setActiveSection('projects')}>Projects</button>
        </nav>
        <Body 
          activeSection={activeSection} 
          about={about} 
          skills={skills} 
          projects={projects} 
        />
      </div>
      <Footer
                githubUrl={githubUrl}
                linkedinUrl={linkedinUrl}
                address={address}
            />
    </div>
  );
}

export default App;
