import { useState } from 'react';
import './Login.css';
import { Logo } from '../../Assets/Logo/Logo';
import { auth } from '../../services/FirebaseConection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Bem vindo de volta!');
        navigate('/admin', { replace: true });
      })
      .catch(() => {
        toast.error('Dados incorretos.');
      });
  }

  return (
    <div className="loginContainer">
      <Logo />

      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Digite seu email"
        />

        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="********"
          autoComplete="On"
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
  );
};

export default Login;
