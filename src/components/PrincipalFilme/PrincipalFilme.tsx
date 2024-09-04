import { useParams } from "react-router-dom";
import { ModeloFilme } from "../../models/ModeloFilme";
import "./PrincipalFilme.css";
import { useEffect, useRef, useState } from "react";
import { getGenreName } from "../utils/genreMapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";

const PrincipalFilme = () => {
  const { id } = useParams()
  const [filme, setFilme] = useState<ModeloFilme>(new ModeloFilme());
  const [loading, setLoading] = useState<boolean>(true);
  const [trailer, setTrailer] = useState<boolean>(false);
  const trailerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/FilmZone.api/api/Filme/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilme(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("erro ao buscar dados: ", error);
        setLoading(true);
      });
  }, [])

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  let ano;
  if (filme.dataLancamento) {
    ano = new Date(filme.dataLancamento).getFullYear();
  }
  let listaGeneros: string[] = [];
  if (filme.idsGenero) {
    listaGeneros = filme.idsGenero.map(id => getGenreName(id))
  }

  const handleClickTrailer = () => {
    setTrailer(!trailer);
    if (trailerRef.current && !trailer) {
      trailerRef.current.play().catch((error) => {
        alert("Erro ao tentar reproduzir o vídeo automaticamente:");
        console.log('erro ao reproduzir: ', error)
      });
    }
    if(trailerRef.current && trailer){
      trailerRef.current.pause();
      trailerRef.current.currentTime = 0; 
    }
  }

  return (
    <div className="principalFilme">
      <div className="principalFilmeCapa">
        <img src={filme.urlCapa} alt="" />
      </div>
      <div className="principalFilmeInfo">
        <h1>{filme.titulo}</h1>
        <div>
          <span style={{ color: 'white', border: '1px solid white', padding: '2px 3px' }} >Movie</span>
          <span style={{ border: '1px solid chartreuse', color: 'chartreuse', padding: '1px 2px' }} >HD</span>
          {listaGeneros.map(genero => <span>{genero},</span>)}
          <span><FontAwesomeIcon icon={faClock} style={{ color: "chartreuse", }} /> 130 min</span>
          <span><FontAwesomeIcon icon={faCalendarDays} style={{ color: "chartreuse", }} /> {ano}</span>
        </div>
        <div className="playNow" >
          <span><FontAwesomeIcon icon={faStar} /> {filme.rating?.toFixed(1)}</span>
          <button className="playMidia"><FontAwesomeIcon icon={faPlay} /> Play Filme</button>
          <button className="playMidia" onClick={handleClickTrailer}>
            <FontAwesomeIcon icon={faPlay} />
            Ver trailer
          </button>
        </div>
        <h4>{filme.sinopse}</h4>

        <div className={trailer ? 'trailerBlock' : 'trailerNone'}>
        <button onClick={handleClickTrailer} >Sair</button>
          <video ref={trailerRef} controls width="250" controlsList="nodownload">  
            <source src={filme.urlTrailer} type="video/webm" />
          </video>
        </div>

      </div>
    </div>
  )
}

export default PrincipalFilme;
