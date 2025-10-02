import React from 'react';
import resumeContent from '../resumeContent';

const Education = ({ sectionId = "education" }) => {
  return (
    <section id={sectionId} className="content-section">
      <header className="section-header">
        <p className="section-eyebrow">Academic Path</p>
        <h2 className="section-title">Education</h2>
      </header>
      <div className="section-body education-list">
        {resumeContent.education.map((edu, index) => (
          <article key={index} className="education-card">
            <h3 className="education-card__institution">{edu.institution}</h3>
            <p className="education-card__degree">{edu.degree}</p>
            <span className="education-card__duration">{edu.duration}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
