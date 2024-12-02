import { Pokemon } from "./PokemonPt";
import { Clonavel } from "./clonavel";

export class Domestico extends Pokemon {
  private _treinador: string;

  constructor(
    treinador: string,
    nome: string,
    energia: number,
    ataque: number,
    defesa: number
  ) {
    super(nome, energia, ataque, defesa);
    this._treinador = treinador;
  }

  public atacar(): string {
    return "Ataque Doméstico";
  }

  public defender(): string {
    return "Defesa Doméstica";
  }

  public status(): string {
    return `
            Status Atual:
            Pokémon: ${this.nome}
            Energia: ${this.energia}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}
            Treinador: ${this._treinador}
        `;
  }

  public clonar(): Pokemon {
    return new Domestico(
      this._treinador,
      this.nome,
      this.energia,
      this.ataque,
      this.defesa
    );
  }
}
