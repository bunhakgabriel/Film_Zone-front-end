import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

import { app } from '../../firebase/firebase';
import { getFirestore, collection, getDocs, setDoc, doc, addDoc, query, where } from 'firebase/firestore'

const Login = () => {
  const [nomeUsuario, setNomeUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const navigate = useNavigate();
  const db = getFirestore(app);

  useEffect(() => {
    if(localStorage.User){
      navigate('/Home')
    }
  }, [])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usuariosCollection = collection(db, 'usuarios');
      const q = query(usuariosCollection, where('nomeUsuario', '==', nomeUsuario));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data(); 
        if(senha != userData.senha) return alert('Senha incorreta! tente novamente')
          localStorage.setItem('User', JSON.stringify({user: nomeUsuario}))
      } else {
        return alert('Usuário não encontrado!');
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }

    alert('Login efetuado')
    navigate('/Home')
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
        required
        className="login-input"
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
        className="login-input"
      />
      <div className='buttons'>
        <button type="submit" className="login-button">Entrar</button>
        <Link to={'/Cadastrar'}>
          <button
            type="button"
            className="register-button"
          >
            Cadastrar-se
          </button></Link>
      </div>
    </form>
  );
};

export default Login;
