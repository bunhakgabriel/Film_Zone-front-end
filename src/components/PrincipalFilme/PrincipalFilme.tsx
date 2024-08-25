import { useParams } from "react-router-dom";
import { ModeloFilme } from "../../models/ModeloFilme";
import "./PrincipalFilme.css";

// const PrincipalFilme = ({ filme }: { filme: ModeloFilme }) => {
//   let ano;
//   if (filme.dataLancamento) {
//     ano = new Date(filme.dataLancamento).getFullYear();
//   }

//   return (
//     <div className="principalFilme">
//       <div className="principalFilmeCapa">
//         <img src={filme.urlCapa} alt="" />
//       </div>
//       <div className="principalFilmeInfo">
//         <h1>{filme.titulo}</h1>
//         <div>
//           <span style={{color: 'black', backgroundColor: 'white', padding: '2px 3px'}} >Movie</span>
//           <span style={{border: '1px solid white', padding: '1px 2px'}} >HD</span>
//           <span>Ação, Drama. Aventura</span>
//           <span>130 min</span>
//           <span>{ano}</span>
//         </div>
//         <div className="playNow" >
//             <span>{filme.rating?.toFixed(1)}</span>
//             <span>Play Filme</span>
//             <span>Ver trailer</span>
//         </div>
//         <h4>{filme.sinopse}</h4>
//       </div>
//     </div>
//   );
// };

const PrincipalFilme = () => {
  const { id } = useParams()

  return (
    <h1>Exibindo informações sobre o filme: {id}</h1>
  )
}

export default PrincipalFilme;
