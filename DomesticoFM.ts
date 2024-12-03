import { Pokemon } from "./Pokemon";
import { Domestico } from "./Domestico";

export interface PokemonFM {
  criarPokemon(
    nome: string,
    energia: number,
    ataque: number,
    defesa: number
  ): Pokemon;
}

export class DomesticoFM implements PokemonFM {
  constructor(private treinador: string) {}

  criarPokemon(
    nome: string,
    energia: number,
    ataque: number,
    defesa: number
  ): Pokemon {
    if (!this.treinador) {
      throw new Error("Treinador é obrigatório para Pokémon Domestico.");
    }
    return new Domestico(this.treinador, nome, energia, ataque, defesa);
  }
}
