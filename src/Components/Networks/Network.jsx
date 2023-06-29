import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import Input from '../Form/Input';
import { MdAddLink } from 'react-icons/md';
import { toast } from 'react-toastify';

import { database } from '../../services/FirebaseConection';
import { setDoc, getDoc, doc } from 'firebase/firestore';

const Network = () => {
  const [linkedIn, setLinkedIn] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [instagram, setInstagram] = useState('');

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(database, 'social', 'link');
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedIn(snapshot.data().linkedIn);
          setGitHub(snapshot.data().gitHub);
          setInstagram(snapshot.data().instagram);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(event) {
    event.preventDefault();

    setDoc(doc(database, 'social', 'link'), {
      linkedIn: linkedIn,
      gitHub: gitHub,
      instagram: instagram,
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

      <h1
        style={{
          color: '#fff',
          marginTop: '2.5rem',
          marginBottom: '1.5rem',
        }}
      >
        Suas redes sociais
      </h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do LinkedIn</label>
        <Input
          value={linkedIn}
          onChange={({ target }) => setLinkedIn(target.value)}
          placeholder="Digite a url"
        />

        <label className="label">Link do GitHub</label>
        <Input
          value={gitHub}
          onChange={({ target }) => setGitHub(target.value)}
          placeholder="Digite a url"
        />

        <label className="label">Link do Instagram</label>
        <Input
          value={instagram}
          onChange={({ target }) => setInstagram(target.value)}
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
