import { Console } from "console";
import { ModeloFilme } from "../models/ModeloFilme";

export const obterFilmePorId = async (id: string): Promise<ModeloFilme> => {
    let filme = new ModeloFilme();
    await fetch(`http://localhost:8080/FilmZone.api/api/Filme/${id}`)
      .then((response) => response.json())
      .then((data) => {
        filme = data
      })
      .catch((error) => {
        console.log("erro ao buscar dados: ", error);
      });
      console.log(filme)
      return filme;
}