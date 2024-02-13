// Definindo o nome
let nomeDoHeroi = "Super Herói";
// Quantidade de valor de XP
let xpHeroi = 7500; 

// Determinando nivel com if independente
let nivel;

if (xpHeroi < 1000) {
    nivel = "Ferro";
}

if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
}

if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
}

if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
}

if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
}

if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
}

if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
}

if (xpHeroi >= 10001) {
    nivel = "Radiante";
}

// printando mensagem de nome e nível
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);