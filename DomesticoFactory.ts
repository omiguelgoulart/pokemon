import { Domestico } from './Domestico';
import { PokemonFactory } from './PokemonFactory';

export class DomesticoFactory extends PokemonFactory {
    private treinador: string;

    constructor(treinador: string) {
        super();
        this.treinador = treinador;
    }

    public criarPokemon(
        nome: string,
        energia: number,
        ataque: number,
        defesa: number
    ): Domestico {
        return new Domestico(this.treinador, nome, energia, ataque, defesa);
    }
}
export default DomesticoFactory;