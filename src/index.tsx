import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListaFilmes from './components/ListaFilmes/ListaFilmes';
import PrincipalFilme from './components/PrincipalFilme/PrincipalFilme';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import Cadastrar from './components/Cadastrar/Cadastrar';
import Login from './components/Login/Login';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ListaFilmes />
//   }
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/Cadastrar",
        element: <Cadastrar />
      },
      {
        path: "/Home",
        element: <PaginaInicial />
      },
      {
        path: "/filmes",
        element: <ListaFilmes />
      },
      //Rota com identificador único - dynamic routes
      {
        path: "/Filme/:id",
        element: <PrincipalFilme />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
