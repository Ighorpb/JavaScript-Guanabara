function calcular() {
    var inicio = document.querySelector('#firstNumber')
    var fim = document.querySelector('#endNumber')
    var contador = document.querySelector('#qntdP')
    var res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || contador.value.length == 0) {
        alert('[ERRO] Faltam dados !!')
    } else {
        res.innerHTML = 'Contanto...  '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let c = Number(contador.value)

        if (i < f) {
            
            for (let p = i; p <= f; p += c) {
                res.innerHTML += `${p} 👉` 
        }
        res.innerHTML += '🏳️'
              
        }else {
            
            for (let p = i; p >= f; p -= c) {
                res.innerHTML += `${p} 👉` 
        }
            res.innerHTML += '🏳️'
        }
    }
}    
