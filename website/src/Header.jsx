import React, { useEffect, useRef } from 'react';


function Header() {
  const downloadButtonRef = useRef(null); 

  useEffect(() => {
    const downloadButton = downloadButtonRef.current;

    const handleDownload = () => {
      const fileUrl = '/david grigorian.pdf'; 
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'David Grigorian.pdf'; 
      link.click();
    };

    if (downloadButton) {
      downloadButton.addEventListener('click', handleDownload);
    }

    return () => {
      if (downloadButton) {
        downloadButton.removeEventListener('click', handleDownload);
      }
    };
  }, []); 

  return (
    <header id="home">
      <div className="section__container header__container">
        <div className="header__content">
          <h2>Hi, I am</h2>
          <h1>David Grigorian</h1>
          <h3>Frontend Developer</h3>
          <p>
            I'm a self-taught frontend developer that is experienced in
            backend development as well. I am continuously improving my skills
            in GIT, HTML, CSS, SCSS, JavaScript, React, Python, SQL, and
            responsive design.
          </p>
          <div className="header__btns">
            <button className="btn primary" id="download" ref={downloadButtonRef}>
              Download CV
            </button>
            <button className="btn secondary">
              <a href="tel:+995598292579">Contact Me</a>
            </button>
          </div>
        </div>
        <div className="header__image">
          <img src='/img/title_photo.jpg' alt="header" />
        </div>
      </div>
    </header>
  );
}

export default Header;

