import React, { useState } from 'react';

const PreferencePage = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h2>Preferences</h2>
      <div>
        <h3>Theme</h3>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <h3>Language</h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </div>
  );
};

export default PreferencePage;
