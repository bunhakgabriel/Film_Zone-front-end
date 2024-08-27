// src/utils/genreMappings.ts

// Define um tipo para o mapeamento de gêneros
type GenreMap = {
    [key: number]: string;
  };
  
export const genreMap: GenreMap = {
    28: 'Ação',
    12: 'Aventura',
    16: 'Animação',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção científica',
    10770: 'Cinema TV',
    53: 'Thriller',
    10752: 'Guerra',
    37: 'Faroeste',
  };
  
  // Função para obter o nome do gênero a partir do código
export const getGenreName = (code: number): string => {
    return genreMap[code] || 'Desconhecido';
};
 
