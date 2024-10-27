import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastrar.css'; // Supondo que o arquivo CSS esteja na mesma pasta

const Cadastrar = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Usuário:", usuario, "Senha:", senha);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="title">Cadastrar-se</h2>
      <input
        className="input"
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
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
          <button className="buttonCancelar" type="submit">Cancelar</button>
        </Link>
      </div>
    </form>
  );
};

export default Cadastrar;
