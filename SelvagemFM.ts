import { Pokemon } from "./Pokemon";
import { Selvagem } from "./Selvagem";

export interface PokemonFM {
  criarPokemon(
    nome: string,
    energia: number,
    ataque: number,
    defesa: number
  ): Pokemon;
}

export class SelvagemFM implements PokemonFM {
  constructor(private regiao: string) {}

  criarPokemon(
    nome: string,
    energia: number,
    ataque: number,
    defesa: number
  ): Pokemon {
    if (!this.regiao) {
      throw new Error("Região é obrigatória para Pokémon Selvagem.");
    }
    return new Selvagem(this.regiao, nome, energia, ataque, defesa);
  }
}

