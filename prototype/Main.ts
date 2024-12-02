import prompt from 'prompt-sync';
import { Domestico } from './utils/DomesticoPt';
import { Selvagem } from './utils/SelvagemPt';
import { Pokemon } from './utils/PokemonPt';

const teclado = prompt();
let option: number = 0;

const pokemonsSelvagens = [
    { nome: 'Pikachu', ataque: 80, defesa: 40, energia: 120 },
    { nome: 'Bulbasaur', ataque: 70, defesa: 50, energia: 130 },
    { nome: 'Squirtle', ataque: 60, defesa: 60, energia: 140 },
];

console.log('Escolha uma opção:');
console.log('1. Criar um Pokémon doméstico');
console.log('2. Capturar um Pokémon selvagem');

const escolha = +teclado('Digite o número da sua escolha: ');

let pokemonEscolhido: Pokemon;

if (escolha === 1) {
    const treinador = teclado('Digite o nome do treinador: ');
    pokemonEscolhido = new Domestico(treinador, 'Charmander', 100, 50, 50);
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

    const pokemonSelvagem = pokemonsSelvagens[captura - 1];
    pokemonEscolhido = new Selvagem('Kanto', pokemonSelvagem.nome, pokemonSelvagem.energia, pokemonSelvagem.ataque, pokemonSelvagem.defesa);

    console.log(`Você capturou o Pokémon ${pokemonEscolhido.nome}!`);
} else {
    console.log('Opção inválida! Fechando o jogo...');
    process.exit(0);
}

while (option !== 9) {
    console.log(`+== Pokémon ${pokemonEscolhido.nome} ==+`);
    console.log('|1. Treinar ataque            |');
    console.log('|2. Treinar defesa            |');
    console.log('|3. Imprimir atributos        |');
    console.log('|4. Entrar em batalha         |');
    console.log('|5. Descansar                 |');
    console.log('|6. Clonar Pokémon            |');
    console.log('|9. Sair                      |');
    console.log('+=============================+');

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
            const horas = +teclado('Quantas horas você quer descansar? ');
            pokemonEscolhido.descansar(horas);
            console.log(`${pokemonEscolhido.nome} descansou por ${horas} horas e recuperou energia.`);
            break;
        case 6:
            const clone = pokemonEscolhido.clonar() as Pokemon;
            console.log('Pokémon clonado com sucesso!');
            console.log(`Clone criado:\n${clone.status()}`);
            break;
        case 9:
            console.log('Saindo do jogo...');
            break;
        default:
            console.log('Opção inválida!');
            break;
    }

    if (pokemonEscolhido.energiaAcabou()) {
        console.log(`${pokemonEscolhido.nome} está sem energia!`);
        option = 9;
    }
}

console.log('Até logo, treinador!');
