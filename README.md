# Pokémon Battle Simulator

Bem-vindo ao **Pokémon Battle Simulator**, um projeto desenvolvido em **TypeScript** que explora diferentes padrões de design criacionais para resolver problemas de criação de objetos. Este simulador implementa os padrões **Prototype**, **Abstract Factory** e **Factory Method**, cada um disponível em branches separadas para facilitar o estudo e a aplicação.

---

## Funcionalidades

- **Treinamento**: Melhore os atributos de ataque e defesa dos seus Pokémon.
- **Batalha**: Simule batalhas que consomem energia.
- **Descanso**: Recupere a energia do seu Pokémon.
- **Clonagem (Prototype)**: Crie cópias exatas de Pokémon.
- **Criação de Pokémon (Abstract Factory e Factory Method)**: Desacople a lógica de criação de objetos e facilite a adição de novos tipos de Pokémon.

---

## Vídeo Explicativo

Assista ao vídeo no YouTube que explica o conceito dos padrões de design aplicados no projeto:

[![Vídeo Explicativo](https://img.youtube.com/vi/6kg19F4LGdI/0.jpg)](https://www.youtube.com/watch?v=6kg19F4LGdI&ab_channel=MiguelGoulart)

---

## Padrões de Design Criacionais

### 1. Prototype

**Objetivo**: Criar cópias exatas de objetos sem depender diretamente de suas classes concretas.

- **Branch**: `prototype`
- **Como funciona**:
    - Uma interface `Clonavel` define o método `clonar`.
    - As classes `Selvagem` e `Domestico` implementam `Clonavel`, permitindo a clonagem de objetos.
    - O método `clonar` retorna uma nova instância do objeto com os mesmos atributos.

#### Exemplo de Código:
```typescript
const selvagem = new Selvagem("Kanto", "Charmander", 100, 50, 30);
const clone = selvagem.clonar();
console.log(clone.status());
```

**Benefícios**:

- Reduz dependências de classes concretas.
- Facilita a criação de objetos com configurações similares.
- Útil em cenários onde criar novos objetos do zero é custoso.

### 2. Abstract Factory

**Objetivo**: Criar famílias de objetos relacionados sem expor a lógica de criação ao código cliente.

- **Branch**: `abstract-factory`
- **Como funciona**:
    - Uma interface define uma fábrica abstrata para criar objetos.
    - Fábricas concretas (`SelvagemFactory`, `DomesticoFactory`) implementam a lógica de criação específica para cada tipo de Pokémon.
    - O código cliente utiliza a fábrica abstrata, sem conhecer detalhes das classes concretas.

#### Exemplo de Código:
```typescript
const selvagemFactory = new SelvagemFactory("Kanto");
const selvagem = selvagemFactory.criarPokemon("Charmander", 100, 50, 30);
console.log(selvagem.status());
```

**Benefícios**:

- Cria famílias de objetos relacionados sem depender de implementações concretas.
- Segue o princípio Open/Closed, permitindo adições sem modificar código existente.
- Centraliza a lógica de criação, facilitando a manutenção.

### 3. Factory Method

**Objetivo**: Fornecer uma interface para criar objetos, delegando a responsabilidade às subclasses.

- **Branch**: `factory-method`
- **Como funciona**:
    - Define uma interface de fábrica para criar objetos Pokémon.
    - Subclasses especializadas (`DomesticoPokemonFactory`, `SelvagemPokemonFactory`) implementam a lógica de criação.
    - O código cliente utiliza as fábricas específicas para instanciar objetos.

#### Exemplo de Código:
```typescript
const factory = new DomesticoPokemonFactory("Ash");
const domestico = factory.criarPokemon("Pikachu", 100, 60, 40);
console.log(domestico.status());
```

**Benefícios**:

- Reduz a complexidade do código cliente.
- Facilita a adição de novos tipos de Pokémon.
- Melhora a organização e modularidade.

---



## Comparação Entre os Padrões

| Aspecto            | Prototype              | Abstract Factory       | Factory Method        |
|--------------------|------------------------|------------------------|-----------------------|
| Propósito          | Clonar objetos existentes. | Criar famílias de objetos. | Delegar criação a subclasses. |
| Flexibilidade      | Alta                   | Alta                   | Média                 |
| Complexidade Inicial | Baixa                  | Média                  | Média                 |
| Aplicação Ideal    | Reutilizar objetos     | Criar objetos relacionados | Delegar lógica de criação |

---

## Branches Disponíveis

Cada padrão de design foi implementado em uma branch separada:

- `prototype`: Implementação do padrão Prototype.
- `abstract-factory`: Implementação do padrão Abstract Factory.
- `factory-method`: Implementação do padrão Factory Method.

---

## Como Executar

Clone este repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Escolha a branch desejada:
```bash
git checkout nome-da-branch
```

Instale as dependências:
```bash
npm install
```

Compile o TypeScript para JavaScript:
```bash
npx tsc
```

Execute o programa:
```bash
node dist/index.js
```

---

## Conclusão

Este projeto demonstra como os padrões Prototype, Abstract Factory e Factory Method podem ser aplicados para melhorar a modularidade, flexibilidade e escalabilidade do código. Explore as branches para entender melhor as diferenças e benefícios de cada padrão.

Se tiver dúvidas ou sugestões, contribuições são bem-vindas!

## 🤝 Contribuídores

<a href="https://github.com/omiguelgoulart"><img src="https://github.com/omiguelgoulart.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/JoaoAANgr"><img src="https://github.com/JoaoAANgr.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/Wagner-V1eira"><img src="https://github.com/Wagner-V1eira.png" width="45" height="45"></a> &nbsp;