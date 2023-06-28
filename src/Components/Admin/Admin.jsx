import './Admin.css';
import { Header } from '../../Components/Header/Header';
import { Logo } from '../../Assets/Logo/Logo';
import Input from '../Form/Input';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';

const Admin = () => {
  return (
    <div className="adminContainer">
      <Header />
      <Logo />
      <form className="form">
        <label className="label">Nome do Link</label>
        <Input placeholder="Nome do link..." />

        <label className="label">Url do Link</label>
        <Input type="url" placeholder="Digite aqui..." />

        <section className="containerColor">
          <div>
            <label className="label right">Fundo do link</label>
            <input type="color" />
          </div>

          <div>
            <label className="label right">Cor do link</label>
            <input type="color" />
          </div>
        </section>

        <button className="btn">
          Cadastrar <MdAddLink size={24} color="#fff" />
        </button>
      </form>

      <h2 className="title">Meus links</h2>

      <article
        className="linkList animatePop"
        style={{ backgroundColor: '#000', color: '#fff' }}
      >
        <p>Grupo exclusivo no Telegram</p>
        <div>
          <button className="btn-remove">
            <FiTrash2 size={18} color="#fff" />
          </button>
        </div>
      </article>
    </div>
  );
};

export default Admin;
