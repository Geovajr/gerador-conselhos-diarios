const conselhos = [
    "Acredite em voçe mesmo!",
    " O Primeiro Passo é o mais importante!",
    "A persistência realiza o impossível!",
    "Aprenda algo novo hoje!",
    "Seja gentil com todos que encontrar!"
];

const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

funcition gerarConselho() {
    const indice = Math.floor(Math.random()*(conselhos.length+1));
    conselhoTexto.textContent = conselhos[indice];
}

novoConselhoBtn.addEventListener('click', gerarConselho);