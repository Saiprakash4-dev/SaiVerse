import React from 'react';
import resumeContent from '../resumeContent';

const WorkExperience = ({ sectionId = 'experience' }) => {
  return (
    <section id={sectionId} className="content-section">
      <header className="section-header">
        <p className="section-eyebrow">Recent Roles</p>
        <h2 className="section-title">Work Experience</h2>
      </header>
      <div className="section-body experience-grid">
        {resumeContent.workExperience.map((job, index) => (
          <article key={index} className="experience-card">
            <header className="experience-card__header">
              <h3 className="experience-card__company">{job.company}</h3>
              <span className="experience-card__duration">{job.duration}</span>
            </header>
            <p className="experience-card__role">{job.role}</p>
            <p className="experience-card__description">{job.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
