import { StringLiteralLike } from "typescript"
import { Pokemon } from "./Pokemon"

export class Selvagem extends Pokemon {
    private _regiao: string

    constructor(
        regiao: string,
        nome: string,
        energia: number, 
        ataque: number, 
        defesa: number
    ) {
        super(nome, energia, ataque, defesa)
        this._regiao = regiao
    }

    public atacar(): string {
        return "Ataque selvagem"
    }

    public defender(): string {
        return "Defesa selvagem"
    }

    public status(): string {
        return `
            Status Atual
            Pokemon: ${this.nome}
            Energia: ${this.energia}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}
            Região: ${this._regiao}
        `
    }
}