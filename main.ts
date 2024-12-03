import prompt from 'prompt-sync';
import { DomesticoFactory } from './DomesticoFactory';
import { SelvagemFactory } from './SelvagemFactory';
import { Pokemon } from './Pokemon';

let teclado = prompt();
let option: number = 0;

// Usando as fábricas para criar Pokémons específicos
const domesticoFactory = new DomesticoFactory('Ash');
const selvagemFactory = new SelvagemFactory('Kanto');


const pokemonsSelvagens = [
    { nome: 'Pikachu', ataque: 80, defesa: 40, energia: 120 },
    { nome: 'Bulbasaur', ataque: 70, defesa: 50, energia: 130 },
    { nome: 'Squirtle', ataque: 60, defesa: 60, energia: 140 }
];

console.log('Escolha uma opção:');
console.log('1. Escolher um Pokémon doméstico');
console.log('2. Capturar um Pokémon selvagem');

let escolha = +teclado('Digite o número da sua escolha: ');


let pokemonEscolhido: Pokemon;

if (escolha === 1) {
    let domestico = domesticoFactory.criarPokemon('Charmander', 80, 40, 120);
    pokemonEscolhido = domestico;
    console.log(`Você escolheu o Pokémon doméstico ${pokemonEscolhido.nome}!`);
} else if (escolha === 2) {
  
    console.log('Escolha um Pokémon selvagem para capturar:');
    pokemonsSelvagens.forEach((pokemon, index) => {
        console.log(`${index + 1}. ${pokemon.nome}`);
    });

    let captura = +teclado('Digite o número do Pokémon selvagem que deseja capturar: ');

    if (captura < 1 || captura > pokemonsSelvagens.length) {
        console.log('Escolha inválida! Criando Charmander por padrão...');
        captura = 1; 
    }

   
    let pokemonSelvagem = pokemonsSelvagens[captura - 1];
    pokemonEscolhido = selvagemFactory.criarPokemon(pokemonSelvagem.nome, pokemonSelvagem.ataque, pokemonSelvagem.defesa, pokemonSelvagem.energia);

    console.log(`Você capturou o Pokémon ${pokemonEscolhido.nome}!`);
} else {
    console.log('Opção inválida! Fechando o jogo...');
    process.exit(0); 
}

while (option !== 9) {
    console.log(`+== Pokémon ${pokemonEscolhido.nome} ==+`);
    console.log("|1. Treinar ataque            |");
    console.log("|2. Treinar defesa            |");
    console.log("|3. Imprimir atributos        |");
    console.log("|4. Entrar em batalha         |");
    console.log("|5. Descansar                 |");
    console.log("|9. Sair                      |");
    console.log("+=============================+");

    option = Number(teclado('Escolha uma opção: '));

    switch (option) {
        case 1:
            pokemonEscolhido.treinarAtaque();
            console.log('Ataque treinado com sucesso!');
            break;
        case 2:
            pokemonEscolhido.treinarDefesa();
            console.log('Defesa treinada com sucesso!');
            break;
        case 3:
            console.log(pokemonEscolhido.status());
            break;
        case 4:
            pokemonEscolhido.batalhar();
            console.log(`${pokemonEscolhido.nome} batalhou com sucesso!`);
            break;
        case 5:
            let horas = +teclado('Quantas horas você quer descansar? ');
            pokemonEscolhido.descansar(horas);
            console.log(`${pokemonEscolhido.nome} descansou por ${horas} horas e recuperou energia.`);
            break;
        default:
            break;
    }

    if (pokemonEscolhido.energiaAcabou()) {
        console.log(`${pokemonEscolhido.nome} está sem energia!`);
        option = 9;
    }
}
console.log('Até logo, treinador!');
