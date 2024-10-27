import "./ListaFilmes.css"
import { ModeloFilme } from "../../models/ModeloFilme";
import Filme from "../Filme/Filme";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Link, useNavigate } from 'react-router-dom';

const ListaFilmes = () => {
  const [listaFilmes, setListaFilmes] = useState<ModeloFilme[]>([]);
  const [listaFiltrada, setListaFiltrada] = useState<ModeloFilme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pesquisa, setPesquisa] = useState<string>("")
  const [pesquisaGenero, setPesquisaGenero] = useState<string>("");
  const navigate = useNavigate()

  let meuIp = 'localhost'
  let ipFaculdade = '172.17.2.89'

  useEffect(() => {
    if(!localStorage.User){
      navigate('/');
    }

    fetch(`http://${meuIp}:8080/FilmZone.api/api/Filme`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setListaFilmes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("erro ao buscar dados: ", error);
        setLoading(true);
      });
  }, []);

  useEffect(() => {

    if (pesquisa.trim() === "" && pesquisaGenero === "") {
      // setListaFiltrada(listaFilmes.filter(filme => filme.urlTrailer !== null))
      setListaFiltrada(listaFilmes)
    } else if (pesquisa.trim() === "" && pesquisaGenero !== "") {
      // setListaFiltrada(listaFilmes.filter(filme =>
      //   filme.idsGenero?.includes(Number(pesquisaGenero)) && filme.urlTrailer !== null
      // ))
      setListaFiltrada(listaFilmes.filter(filme =>
        filme.idsGenero?.includes(Number(pesquisaGenero))))
    } else if (pesquisa.trim() !== "" && pesquisaGenero === "") {
      // setListaFiltrada(listaFilmes.filter(filme =>
      //   filme.titulo?.toLowerCase().includes(pesquisa.toLowerCase()) && filme.urlTrailer !== null
      // ))
      setListaFiltrada(listaFilmes.filter(filme =>
        filme.titulo?.toLowerCase().includes(pesquisa.toLowerCase())))
    } else {
      // setListaFiltrada(listaFilmes.filter(filme =>
      //   filme.titulo?.toLowerCase().includes(pesquisa.toLowerCase()) && filme.idsGenero?.includes(Number(pesquisaGenero))
      //   && filme.urlTrailer !== null
      // ))
      setListaFiltrada(listaFilmes.filter(filme =>
        filme.titulo?.toLowerCase().includes(pesquisa.toLowerCase()) && filme.idsGenero?.includes(Number(pesquisaGenero))))
    }

  }, [listaFilmes, pesquisa, pesquisaGenero])

  if (loading) return <h1>Carregando...</h1>

  const buscarFilme = (tipo: 'F' | 'G', value: string): void => {
    if (tipo === 'F') {
      setPesquisa(value);
    }
    if (tipo === 'G') {
      setPesquisaGenero(value);
    }

  }

  return (
    <>
      <NavBar busca={buscarFilme} />
      <div className="containerlistaFilmes">
        {listaFiltrada.map((item) => {
          return <Filme key={item.id} filme={item} />;
        })}
      </div>
    </>
  )
}

export default ListaFilmes;