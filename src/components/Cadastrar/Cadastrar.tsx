import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastrar.css';

import { app } from '../../firebase/firebase';
import { getFirestore, collection, getDocs, setDoc, doc, addDoc, query, where } from 'firebase/firestore'

const Cadastrar = () => {
  const [nomeUsuario, setNomeUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  const navigate = useNavigate()
  const db = getFirestore(app)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const usuario = { nomeUsuario, senha }

    try {

      const usuariosCollection = collection(db, 'usuarios');
      const q = query(usuariosCollection, where('nomeUsuario', '==', nomeUsuario));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert('Usuário já cadastrado! Tente outro.');
        return;
      }

      await addDoc(usuariosCollection, usuario);
      alert('Cadastro realizado com sucesso')
      navigate('/');
    } catch (e) {
      console.log('Erro ao cadastrar usuario: ' + e);
      alert('Erro ao cadastrar usuário, aguarde e tente novamente');
    }

  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="title">Cadastrar-se</h2>
      <input
        className="input"
        type="text"
        placeholder="Usuário"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
        required
      />
      <input
        className="input"
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <input
        className="input"
        type="password"
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
        required
      />
      <div className='buttons'>
        <button className="button" type="submit">Registrar</button>
        <Link to={'/'}>
          <button className="buttonCancelar">Cancelar</button>
        </Link>
      </div>
    </form>
  );
};

export default Cadastrar;
