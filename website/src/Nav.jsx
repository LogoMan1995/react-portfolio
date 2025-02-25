import React, { useState, useEffect } from 'react';

function Nav() {
  const home = "Home";
  const intro = "Intro";
  const qualifications = "Qualifications";
  const contact = "Contact";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !isOpen) {
        setIsOpen(true);
      }
      
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              {home}
            </a>
          </li>
          <li className="nav-item">
            <a href="#intro" className="nav-link">
              {intro}
            </a>
          </li>
          <li className="nav-item">
            <a href="#qualifications" className="nav-link">
              {qualifications}
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              {contact}
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
        </div>
      </nav>
    </>
  );
}

export default Nav;


