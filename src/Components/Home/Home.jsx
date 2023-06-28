import './Home.css';
import { Social } from '../../Assets/Social/Social';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

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

        <footer>
          <Social url="https://facebook.com">
            <FaFacebook size={35} color="#fff" />
          </Social>

          <Social url="https://youtube.com">
            <FaYoutube size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
};

export default Home;
