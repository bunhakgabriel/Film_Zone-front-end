import { ModeloFilme } from "../../models/ModeloFilme";
import "./Filme.css";
import { Link } from "react-router-dom";

const Filme = ({ filme }: { filme: ModeloFilme }) => {

  let ano;
  if (filme.dataLancamento) {
    ano = new Date(filme.dataLancamento).getFullYear();
  }

  return (
    <>
      <div className="filmeContainer" >
        <Link to={"/Filme/"+filme.id} >
          <img src={filme.urlCapa} alt="" />
        </Link>
        <div className="informacoes">
          <span style={{ width: '75%', fontSize: '18px' }} >{filme.titulo}</span>
          <span style={{ color: 'chartreuse', width: '22%', fontSize: '15px', textAlign: 'end' }} >{ano}</span>
          {/* <span>HD</span>
          <span>130 min</span>
          <span>{filme.rating!.toFixed(1)}</span> */}
        </div>
      </div>
    </>
  );
};

export default Filme;
