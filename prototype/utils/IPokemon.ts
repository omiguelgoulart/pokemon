export interface IPokemon {
    nome: string;
    energia: number;
    ataque: number;
    defesa: number;

    atacar(): string;
    defender(): string;
    status(): string;
    treinarAtaque(): void;
    treinarDefesa(): void;
    batalhar(): void;
    descansar(horas: number): void;
    energiaAcabou(): boolean;
}
