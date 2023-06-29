import { useState, useEffect } from 'react';
import './Network.css';
import { Header } from '../Header/Header';
import Input from '../Form/Input';
import { MdAddLink } from 'react-icons/md';
import { toast } from 'react-toastify';

import { database } from '../../services/FirebaseConection';
import { setDoc, getDoc, doc } from 'firebase/firestore';

const Network = () => {
  const [face, setFace] = useState('');
  const [insta, setInsta] = useState('');
  const [youtube, setYoutube] = useState('');

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(database, 'social', 'link');
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFace(snapshot.data().face);
          setInsta(snapshot.data().insta);
          setYoutube(snapshot.data().youtube);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(event) {
    event.preventDefault();

    setDoc(doc(database, 'social', 'link'), {
      face: face,
      insta: insta,
      youtube: youtube,
    })
      .then(() => {
        toast.success('Salvo com sucesso!');
      })
      .catch(() => {
        toast.error('Erro ao salvar links!');
      });
  }

  return (
    <div className="adminContainer">
      <Header />

      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do facebook</label>
        <Input
          value={face}
          onChange={({ target }) => setFace(target.value)}
          placeholder="Digite a url"
        />

        <label className="label">Link do instagram</label>
        <Input
          value={insta}
          onChange={({ target }) => setInsta(target.value)}
          placeholder="Digite a url"
        />

        <label className="label">Link do youtube</label>
        <Input
          value={youtube}
          onChange={({ target }) => setYoutube(target.value)}
          placeholder="Digite a url"
        />

        <button type="submit" className="btn">
          Salvar <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>
  );
};

export default Network;
