import { Link } from 'react-router-dom';
import './Logo.css';

export const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo">
        My<span className="logo-txt">Links</span>
      </h1>
    </Link>
  );
};
