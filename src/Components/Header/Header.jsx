import React from 'react';
import './Header.css';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { auth } from '../../services/FirebaseConection';
import { signOut } from 'firebase/auth';

export const Header = () => {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <header className="header">
      <nav className="nav-header">
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#DB2629" />
        </button>

        <Link to="/admin">Links</Link>
        <Link to="/admin/social">Redes sociais</Link>
      </nav>
    </header>
  );
};
