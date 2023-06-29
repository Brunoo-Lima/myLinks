import { useState, useEffect } from 'react';
import './Home.css';
import { Social } from '../../Assets/Social/Social';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
  getDocs,
  collection,
  orderBy,
  query,
  getDoc,
  doc,
} from 'firebase/firestore';
import { database } from '../../services/FirebaseConection';

const Home = () => {
  const [links, setLinks] = useState([]);
  const [social, setSocial] = useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(database, 'links');
      const queryRef = query(linksRef, orderBy('created', 'asc'));

      //getDocs busca os docs do banco
      getDocs(queryRef).then((snapshot) => {
        let list = [];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(list);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(database, 'social', 'link');

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocial({
            face: snapshot.data().face,
            insta: snapshot.data().insta,
            youtube: snapshot.data().youtube,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <div className="homeContainer">
      <h1>Bruno Lima</h1>

      <main className="links">
        {links.map((item) => (
          <section
            key={item.id}
            className="linkArea"
            style={{ backgroundColor: item.bg }}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <p className="linkTxt" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(social).length > 0 && (
          <footer>
            <Social url={social?.face}>
              <FaFacebook size={35} color="#fff" />
            </Social>

            <Social url={social?.youtube}>
              <FaYoutube size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
};

export default Home;
