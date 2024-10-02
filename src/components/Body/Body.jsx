import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';

const Body = ({ activeSection, about, skills, projects }) => {
  return (
    <div className="bodyContent">
      {activeSection === 'about' && <div className="section">{about}</div>}
      {activeSection === 'skills' && (
    <ul className="section skills-list">
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
    </ul>
)}
      {activeSection === 'projects' && (
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Body.propTypes = {
  activeSection: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Body;
