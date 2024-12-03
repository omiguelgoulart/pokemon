    import { Selvagem } from './Selvagem';
    import { PokemonFactory } from './PokemonFactory';

    export class SelvagemFactory extends PokemonFactory {
        private regiao: string;

        constructor(regiao: string) {
            super();
            this.regiao = regiao;
        }

        public criarPokemon(
            nome:          string,
            energia:       number,
            ataque:        number,
            defesa:        number
        ): Selvagem
        {
            return new Selvagem(this.regiao, nome, energia, ataque, defesa);
        }
    }
    export default SelvagemFactory;