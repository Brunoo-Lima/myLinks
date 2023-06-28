import { Logo } from '../../Assets/Logo/Logo';
import './HelperStyle/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="error">
      <Logo />
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>

      <Link className="link" to="/">
        Voltar para home
      </Link>
    </div>
  );
};

export default NotFound;
