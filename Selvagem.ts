import { Pokemon } from './Pokemon';

export class Selvagem extends Pokemon {
    private _regiao: string;

    constructor(
        regiao: string,
        nome: string,
        energia: number,
        ataque: number,
        defesa: number)
        {

        super(
            nome,
            energia,
            ataque,
            defesa
        );
        this._regiao = regiao;
    }

    public atacar(): string {
        return 'Ataque Selvagem';
    }

    public defender(): string {
        return 'Defesa Selvagem';
    }

    public status(): string {
        return `
            Status Atual:
            Pokémon: ${this.nome}
            Energia: ${this.energia}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}
            Região: ${this._regiao}
        `;
    }
}
export default Selvagem;