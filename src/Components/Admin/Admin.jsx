import { useState, useEffect } from 'react';
import './Admin.css';
import { Header } from '../../Components/Header/Header';
import { Logo } from '../../Assets/Logo/Logo';
import Input from '../Form/Input';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { database } from '../../services/FirebaseConection';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const Admin = () => {
  const [nameInput, setNameInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [backgroundColorInput, setBackgroundColorInput] = useState('#f1f1f1');
  const [textColorInput, setTextColorInput] = useState('#121212');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksRef = collection(database, 'links');
    const queryRef = query(linksRef, orderBy('created', 'asc'));

    //onSnapshot monitora em tempo real o banco
    const unsub = onSnapshot(queryRef, (snapshot) => {
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
  }, []);

  async function handleRegister(event) {
    event.preventDefault();
    if (nameInput === '' || urlInput === '') {
      toast.warn('Preencha todos os campos');
      return;
    }

    //addDoc gera id aleatorio
    addDoc(collection(database, 'links'), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput('');
        setUrlInput('');
      })
      .catch(() => {
        toast.error('Erro ao salvar o link');
      });
  }

  async function handleDeleteLink(id) {
    const docRef = doc(database, 'links', id);
    await deleteDoc(docRef);
  }

  return (
    <div className="adminContainer">
      <Header />
      <Logo />
      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do Link</label>
        <Input
          value={nameInput}
          onChange={({ target }) => setNameInput(target.value)}
          placeholder="Nome do link..."
        />

        <label className="label">Url do Link</label>
        <Input
          type="url"
          value={urlInput}
          onChange={({ target }) => setUrlInput(target.value)}
          placeholder="Digite aqui..."
        />

        <section className="containerColor">
          <div>
            <label className="label right">Fundo do link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={({ target }) => setBackgroundColorInput(target.value)}
            />
          </div>

          <div>
            <label className="label right">Cor do link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={({ target }) => setTextColorInput(target.value)}
            />
          </div>
        </section>

        {nameInput !== '' && (
          <div className="preview">
            <label className="label">Pre-visualização</label>
            <article
              className="linkList"
              style={{ marginTop: 8, backgroundColor: backgroundColorInput }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn">
          Cadastrar <MdAddLink size={24} color="#fff" />
        </button>
      </form>

      <h2 className="title">Meus links</h2>

      {links.map((item, index) => (
        <article
          key={index}
          className="linkList animatePop"
          style={{ backgroundColor: item.bg, color: item.color }}
        >
          <p>{item.name}</p>
          <div>
            <button
              className="btn-remove"
              onClick={() => handleDeleteLink(item.id)}
            >
              <FiTrash2 size={18} color="#fff" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Admin;
