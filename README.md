## Batalha de Pokémons: Pikachu & Charmander

// Primeiro, definimos as variáveis, que no caso, são a energia (vida) dos pokémons.
let energiapikachu = 80;
let energiacharmander = 80;

// Agora, a varável de rodada inicial.
let rodada = 1;

// Iniciamos o while para mecanizar a batalha.
// E no while, específicamos que só rodará enquanto a energia dos pokémons for maior que 0.
while (energiapikachu > 0 && energiacharmander > 0){
    console.log('🟢Rodada', rodada);

// Aqui, definimos as variáveis de ataque dos pokémons, na qual, estão com valores randomizados de no mínimo 10 e máximo 25 para o pikachu e mínimo 8 e máximo 22 para o charmander.
    let ataquecharmander = Math.floor(Math.random() * (22 - 8 + 1) + 8);
    let ataquepikachu = Math.floor(Math.random() *(25 - 10 + 1) + 10);

// Depois das variáveis prontas, colocamos para rodar o ataque subtraindo da energia, conforme o valor.
    energiapikachu -= ataquecharmander;
    energiacharmander -= ataquepikachu;

// Com os ataques gerados, colocamos como vai exibir no console o valor dos ataques.
    console.log(`⚡Pikachu usou sua habilidade de trovão e deu ${ataquepikachu} de dano`);
    console.log(`🔥Charmander usou sua habilidade de chama e deu ${ataquecharmander} de dano`);
    
// E aqui, o valor final da vida deles após o ataque.
    console.log(`❤️Energia restante do Pikachu: ${energiapikachu}`);
    console.log(`❤️Energia restante do Charmander: ${energiacharmander}`);
// Separação para ficar bonitinho no console.
    console.log('────────────────ϞϞ૮(๑⚈ ․̫ ⚈๑)ა────────────────');
// Colocamos rodada++ para repetir o processo ate os valores serem <= 0, como especificado no início.
    rodada++;
}
// Agora, utilizamos o if else para mostrar oque, após a batalha finalizada, irá aparecer.
console.log('...')
if(energiacharmander <= 0 && energiapikachu <=0){
    console.log('😑Meu deus! Um empate.');
}else if(energiacharmander > energiapikachu){
    console.log('🏆Charmander campeão! 🔥');
}else{
    console.log('🏆Pikachu campeão!⚡')
}
