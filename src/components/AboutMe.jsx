import React from 'react';
import resumeContent from '../resumeContent';

const AboutMe = ({ sectionId = 'about' }) => {
  return (
    <section id={sectionId} className="content-section">
      <header className="section-header">
        <p className="section-eyebrow">Introduction</p>
        <h2 className="section-title">About Me</h2>
      </header>
      <div className="section-body">
        <p className="section-paragraph">{resumeContent.aboutMe}</p>
      </div>
    </section>
  );
};

export default AboutMe;
