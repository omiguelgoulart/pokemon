import prompt from 'prompt-sync';
import { DomesticoFM } from './DomesticoFM';
import { SelvagemFM } from './SelvagemFM';
import { Pokemon } from './Pokemon';

let teclado = prompt();
let option: number = 0;

const domesticoFactory = new DomesticoFM("Ash Ketchum");
const selvagemFactory = new SelvagemFM("Kanto");

const selvagem: Pokemon = selvagemFactory.criarPokemon("Charmander", 100, 50, 40);
const domestico: Pokemon = domesticoFactory.criarPokemon("Pikachu", 100, 60, 30);

console.log(`Selvagem criado: ${selvagem.nome}`);
console.log(`Doméstico criado: ${domestico.nome}`);


while (option != 9) {
    console.log(`+== Pokemon ${selvagem.nome} ==+`)
    console.log("|1. Treinar ataque            |")
    console.log("|2. Treinar defesa            |")
    console.log("|3. Imprimir atributos        |")
    console.log("|4. Entrar em batalha         |")
    console.log("|5. Descansar                 |")
    console.log("|9. Sair                      |")
    console.log("+=============================+")

    option = Number(teclado("Escolha uma opção:"))

    switch (option) {
        case 1:
            selvagem.treinarAtaque()
            if (selvagem.energiaAcabou()) {
                option = 9
                break
            }
            console.log(selvagem.status())
            break;
            case 2:
                selvagem.treinarDefesa()
                if (selvagem.energiaAcabou()) {
                    option = 9
                    break
                }
            case 3:
                console.log(selvagem.status())
                break;
            case 4: 
                selvagem.batalhar()
                if (selvagem.energiaAcabou()) {
                    option = 9
                    break
                }
                console.log(selvagem.status())
                break;
            case 5:
                let horas = +teclado("Quantas horas você quer descansar?")
                selvagem.descansar(horas)
                console.log(selvagem.status())
                break;
                default:
                 break
    }
}
console.log("Até Logo Treinador!"); 