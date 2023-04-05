// criar uma nova instância da classe Date
//const agora = new Date();

// obter a hora atual em formato de string
//const horaAtual = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

// exibir a hora atual
//console.log(`Agora são ${horaAtual}`);

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)
if(hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}