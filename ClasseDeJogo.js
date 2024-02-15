class Heroi {
    constructor(nome, idade, tipo) {// usando parametros nome, idade e tipo
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() { // atacar para determinar o tipo de ataque com base no tipo do herói.
        const ataques = {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        };

        // Obtém o ataque correspondente ao tipo do herói atual do objeto.
        // Se o tipo do herói não estiver presente no objeto de ataques, usa um ataque desconhecido.
        const ataque = ataques[this.tipo] || 'usou um ataque desconhecido';

        // Exibe uma mensagem no console indicando o tipo do herói e o ataque realizado.
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Lista de heróis
const herois = [
    new Heroi('Dumberdo', 1300, 'mago'),
    new Heroi('Hercule', 30, 'guerreiro'),
    new Heroi('Gael', 42, 'monge'),
    new Heroi('Jack', 52, 'ninja')
];

// for para chamar o atacar para cada herói na lista
for (let i = 0; i < herois.length; i++) {
    // Obtém o herói atual da lista.
    const heroiEscolhido = herois[i];
    // Chama o método atacar para o herói escolhido.
    heroiEscolhido.atacar();
}
