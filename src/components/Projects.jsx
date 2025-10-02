import React from 'react';
import resumeContent from '../resumeContent';

const Projects = ({ sectionId = "projects" }) => {
  return (
    <section id={sectionId} className="content-section">
      <header className="section-header">
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="section-title">Projects</h2>
      </header>
      <div className="section-body project-list">
        {resumeContent.projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-card__heading">
              <h3 className="project-card__title">{project.name}</h3>
              {project.link && (
                <a
                  href={project.link}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              )}
            </div>
            <p className="project-card__description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
