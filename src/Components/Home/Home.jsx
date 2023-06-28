import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Bruno Lima</h1>

      <main className="links">
        <section className="linkArea">
          <a href="#">
            <p className="linkTxt">Portfólio</p>
          </a>
        </section>
        <section className="linkArea">
          <a href="#">
            <p className="linkTxt">LinkedIn</p>
          </a>
        </section>
        <section className="linkArea">
          <a href="#">
            <p className="linkTxt">GitHub</p>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
