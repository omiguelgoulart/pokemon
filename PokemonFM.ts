import { Pokemon } from "./Pokemon";

export interface PokemonFM {
  criarPokemon(
    nome: string,
    energia: number,
    ataque: number,
    defesa: number
  ): Pokemon;
}
