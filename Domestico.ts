import { Pokemon } from "./Pokemon"

export class Domestico extends Pokemon {
    private _treinador: string

    constructor(
        treinador: string,
        nome: string,
        energia: number, 
        ataque: number, 
        defesa: number
    ) {
        super(nome, energia, ataque, defesa)
        this._treinador = treinador
    }

    public atacar(): string {
        return "Ataque Domestico"
    }

    public defender(): string {
        return "Defesa Domestica"
    }

    public status(): string {
        return `
            Status Atual
            Pokemon: ${this.nome}
            Energia: ${this.energia}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}
            Treinador: ${this._treinador}
        `
    }
}