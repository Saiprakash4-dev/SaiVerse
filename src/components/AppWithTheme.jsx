import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const AppWithTheme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="icon-button"
        aria-label={`Activate ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
      {children}
    </div>
  );
};

export default AppWithTheme;
