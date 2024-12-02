/**interface Pessoa <Profissao> {
    nome: string;
    idade: number;
    profissao: Profissao;
}

interface Aluno {
    ra: string;
}

interface Engenheiro {
    crea: string;
}

interface Medico {
    crm: string;
}

let medico: Pessoa<Medico>;
let aluno: Pessoa<Aluno>
let engenheiro: Pessoa<Engenheiro>

medico = {
    nome: 'João',
    idade: 50,
    profissao: {crm: "2846394"}
}*/

/**depois de instalar o prompt-sync deve digitar o seguinte comando: npm i @types/prompt-sync -D */


    

import prompt from 'prompt-sync'
import { Pokemon } from './Pokemon';
import { Selvagem } from './Selvagem';
import { Domestico } from './Domestico';

let selvagem: Pokemon = new Selvagem("Fogo","Charmander", 100, 0, 0)
let domestico: Pokemon = new Domestico("Elétrico","Pikachu", 100, 0, 0)


console.log(selvagem.atacar());
console.log(domestico.defender());


let teclado = prompt();
let option: number = 0;

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
                console.log(selvagem.status())
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