let energiapikachu = 80;
let energiacharmander = 80;

let rodada = 1;

while (energiapikachu > 0 && energiacharmander > 0){
    console.log('🟢Rodada', rodada);

    let ataquecharmander = Math.floor(Math.random() * (22 - 8 + 1) + 8);
    let ataquepikachu = Math.floor(Math.random() *(25 - 10 + 1) + 10);

    energiapikachu -= ataquecharmander;
    energiacharmander -= ataquepikachu;

    console.log(`⚡Pikachu usou sua habilidade de trovão e deu ${ataquepikachu} de dano`);
    console.log(`🔥Charmander usou sua habilidade de chama e deu ${ataquecharmander} de dano`);
    
    console.log(`❤️Energia restante do Pikachu: ${energiapikachu}`);
    console.log(`❤️Energia restante do Charmander: ${energiacharmander}`);
    console.log('────────────────ϞϞ૮(๑⚈ ․̫ ⚈๑)ა────────────────');
    rodada++;
}
console.log('...')
if(energiacharmander <= 0 && energiapikachu <=0){
    console.log('😑Meu deus! Um empate.');
}else if(energiacharmander > energiapikachu){
    console.log('🏆Charmander campeão! 🔥');
}else{
    console.log('🏆Pikachu campeão!⚡')
}