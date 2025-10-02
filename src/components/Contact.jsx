import React from 'react';
import resumeContent from '../resumeContent';

const Contact = ({ sectionId = "contact" }) => {
  const { contact } = resumeContent;

  return (
    <section id={sectionId} className="content-section">
      <header className="section-header">
        <p className="section-eyebrow">Say Hello</p>
        <h2 className="section-title">Contact</h2>
      </header>
      <div className="section-body contact-grid">
        <p className="section-paragraph">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <dl className="contact-list">
          {contact?.email && (
            <div className="contact-list__item">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
          )}
          {contact?.phone && (
            <div className="contact-list__item">
              <dt>Phone</dt>
              <dd>{contact.phone}</dd>
            </div>
          )}
          {contact?.linkedIn && (
            <div className="contact-list__item">
              <dt>LinkedIn</dt>
              <dd>
                <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
                  {contact.linkedIn}
                </a>
              </dd>
            </div>
          )}
          {contact?.github && (
            <div className="contact-list__item">
              <dt>GitHub</dt>
              <dd>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  {contact.github}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </section>
  );
};

export default Contact;
