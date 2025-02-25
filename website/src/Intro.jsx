function Intro() {
  return (
    <>
      <section className="section__container intro__container" id="intro">
        <div className="skill__grid">
          <img src="/img/html.jpg" alt="HTML skill" />
          <img src="/img/css.jpg" alt="CSS skill" />
          <img src="/img/jss.jpg" alt="JavaScript skill" />
          <img src="/img/react.png" alt="React skill" />
          <img src="/img/python.jpg" alt="Python skill" />
          <img src="/img/sql.jpg" alt="SQL skill" />
        </div>
        <div className="intro__content">
          <p className="section__subheader">My Intro</p>
          <h2 className="section__header">About Me</h2>
          <p className="intro__description">
            An eager and motivated frontend developer intern, passionate about learning and growing in the field
            of web development. I’m committed to creating visually appealing and user-friendly interfaces while
            working with modern technologies. My goal is to quickly master best practices and contribute to the
            success of your team’s projects.
          </p>
        </div>
      </section>
    </>
  );
}

export default Intro;
