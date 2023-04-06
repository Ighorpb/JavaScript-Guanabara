function gerar() {
    var number = document.querySelector('#number')
    var tab = document.querySelector('#tabuada')
    var n = Number(number.value)

    tab.innerHTML = ''

    for(r = 1; r <= 10; ++r )
        {
            tab.innerHTML += `${n} x ${r} = ${n * r} \n`  // Tem que colocar '+=' para encrementar a tabela
        }
    
}