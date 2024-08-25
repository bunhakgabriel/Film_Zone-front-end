import "./ListaFilmes.css"
import { ModeloFilme } from "../../models/ModeloFilme";
import Filme from "../Filme/Filme";
import { useEffect, useState } from "react";

const ListaFilmes = () => {
    const [listaFilmes, setListaFilmes] = useState<ModeloFilme[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      fetch("http://localhost:8080/FilmZone.api/api/Filme")
        .then((response) => response.json())
        .then((data) => {
          setListaFilmes(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("erro ao buscar dados: ", error);
          setLoading(true);
        });
    }, []);
  
    if (loading) {
      return <h1>Carregando...</h1>;
    }
  
    console.log(listaFilmes);
    return (
        <div className="containerlistaFilmes">
            {listaFilmes!.map((item) => {
              return <Filme filme={item} />;
            })}
          </div>
    )
}

export default ListaFilmes;