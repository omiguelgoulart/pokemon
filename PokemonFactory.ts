import { Pokemon } from './Pokemon';

export abstract class PokemonFactory {
    public abstract criarPokemon(
        nome:          string,
        energia:       number,
        ataque:        number,
        defesa:        number
    ): Pokemon;
}
export default PokemonFactory;