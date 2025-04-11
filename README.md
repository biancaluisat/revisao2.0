# Batalha de Pokémons: Pikachu & Charmander

---

## 🧠 Como funciona o código

```js
// Primeiro, definimos as variáveis, que no caso, são a energia (vida) dos pokémons.
let energiapikachu = 80;
let energiacharmander = 80;

// Agora, a varável de rodada inicial.
let rodada = 1;

// Iniciamos o while para mecanizar a batalha.
// E no while, específicamos que só rodará enquanto a energia dos pokémons for maior que 0.
while (energiapikachu > 0 && energiacharmander > 0) {
    console.log('🟢Rodada', rodada);

    // Aqui, definimos as variáveis de ataque dos pokémons.
    // Pikachu: mínimo 10, máximo 25
    // Charmander: mínimo 8, máximo 22
    let ataquecharmander = Math.floor(Math.random() * (22 - 8 + 1) + 8);
    let ataquepikachu = Math.floor(Math.random() * (25 - 10 + 1) + 10);

    // Após os valores serem definidos, aplicamos os danos à energia dos oponentes.
    energiapikachu -= ataquecharmander;
    energiacharmander -= ataquepikachu;

    // Exibimos no console os ataques realizados.
    console.log(`⚡Pikachu usou sua habilidade de trovão e deu ${ataquepikachu} de dano`);
    console.log(`🔥Charmander usou sua habilidade de chama e deu ${ataquecharmander} de dano`);

    // Exibimos a energia restante após a rodada.
    console.log(`❤️Energia restante do Pikachu: ${energiapikachu}`);
    console.log(`❤️Energia restante do Charmander: ${energiacharmander}`);

    // Separação visual no console
    console.log('────────────────ϞϞ૮(๑⚈ ․̫ ⚈๑)ა────────────────');

    // Incrementa a rodada
    rodada++;
}

// Quando a batalha termina, exibimos o resultado final com base nas energias restantes
console.log('...');

if (energiacharmander <= 0 && energiapikachu <= 0) {
    console.log('😑Meu deus! Um empate.');
} else if (energiacharmander > energiapikachu) {
    console.log('🏆Charmander campeão! 🔥');
} else {
    console.log('🏆Pikachu campeão!⚡');
}
