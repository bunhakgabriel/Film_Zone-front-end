import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Arquivo de estilos CSS

const Login = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação
    console.log("Usuário:", usuario, "Senha:", senha);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
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
