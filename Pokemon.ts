export abstract class Pokemon {
    //propriedades
    private _nome: string;
    private _energia: number;
    private _ataque: number;
    private _defesa: number;

    constructor (nome: string, energia: number, ataque: number, defesa: number) {
        this._nome = nome;
        this._energia = energia;
        this._ataque = ataque;
        this._defesa = defesa;
    }

    
    public get nome() : string {
        return this._nome
    }
    
    public set nome(nome : string) {
        this._nome = nome
    }
    

    public get energia(): number {
        return this._energia;
    }
    public set energia(value: number) {
        this._energia = value;
    }


    public get ataque(): number {
        return this._ataque;
    }
    public set ataque(value: number) {
        this._ataque = value;
    }
    
    
    public get defesa(): number {
        return this._defesa;
    }
    public set defesa(value: number) {
        this._defesa = value;
    }

    //métodos
    
    public abstract atacar(): string
    public abstract defender(): string
    public abstract status(): string 


    public treinarAtaque(): void {
        this._ataque += this.random(7);
        this._energia -= this.random(10)
        
        if (this._ataque > 100) this._ataque = 100
    }

    public treinarDefesa(): void {
        this._defesa += this.random(3);
        this._energia -= this.random(10)
        
        if (this._defesa > 100) this._defesa = 100
    }

    public batalhar(): void {
        this._energia -= this.random(10);
        
    }

    public descansar(horas: number): void {
        this._energia += horas * this.random(5);
        if (this._energia > 100) this._energia = 100
    }

    public energiaAcabou(): boolean {
        return this._energia < 0
    }

    private random(fator: number): number {
        return Math.floor(Math.random() * fator) + 1;
    }
}

