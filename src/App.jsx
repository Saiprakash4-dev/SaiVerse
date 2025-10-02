import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import resumeContent from './resumeContent';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './App.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

const formatName = (nameFromContent, githubUrl) => {
  if (nameFromContent) {
    return nameFromContent;
  }

  if (!githubUrl) {
    return 'Your Name';
  }

  const parsed = githubUrl
    .split('/')
    .filter(Boolean)
    .pop();

  if (!parsed) {
    return 'Your Name';
  }

  return parsed
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

function App() {
  const { contact, profile = {} } = resumeContent;
  const derivedName = formatName(profile.name, contact?.github);
  const heroSummary = profile.summary || resumeContent.aboutMe;
  const heroTitle = profile.tagline || 'Software Engineer & Problem Solver';

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="sidebar-content">
          <p className="sidebar-kicker">Portfolio</p>
          <h1 className="sidebar-name">{derivedName}</h1>
          <h2 className="sidebar-role">{heroTitle}</h2>
          <p className="sidebar-summary">{heroSummary}</p>

          <nav className="sidebar-nav" aria-label="Primary">
            {navItems.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} className="sidebar-nav__link">
                <span className="sidebar-nav__index">{String(index + 1).padStart(2, '0')}.</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="sidebar-social">
            {contact?.email && (
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            )}
            {contact?.linkedIn && (
              <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            )}
            {contact?.github && (
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            )}
          </div>

          {profile.location && <p className="sidebar-location">Based in {profile.location}</p>}
        </div>
      </aside>

      <main className="app-content">
        <AboutMe sectionId="about" />
        <WorkExperience sectionId="experience" />
        <Skills sectionId="skills" />
        <Education sectionId="education" />
      </main>
    </div>
  );
}

export default App;
