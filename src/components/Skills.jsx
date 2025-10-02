import React from 'react';
import resumeContent from '../resumeContent';

const Skills = ({ sectionId = "skills" }) => {
  return (
    <section id={sectionId} className="content-section">
      <header className="section-header">
        <p className="section-eyebrow">Toolkit</p>
        <h2 className="section-title">Skills & Technologies</h2>
      </header>
      <div className="section-body">
        <ul className="skills-grid">
          {resumeContent.skills.map((skill, index) => (
            <li key={index} className="skills-grid__item">
              <span className="skills-dot" aria-hidden="true" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
