function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

   if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tenta novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.querySelector('#foto')
       

        if(fsex[0].checked) {
                if(idade >=0 && idade < 10 ){
                    gênero = 'menino'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotocriancaM.jpg'
                }else if(idade < 21) {
                    gênero = 'garoto'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotoadolM.jpg'
                }else if(idade < 50) {
                    gênero = 'homem'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotoadulM.jpg'
                } else {
                    gênero = 'senhor'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotovelM.jpg'
                }
        }else {
            gênero = 'Mulher'
                if(idade >=0 && idade <10 ){
                    gênero = 'menina    '
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotocriancaF.jpg'
              } else if(idade <21) {
                    gênero = 'garota'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotoadolF.jpg'
              } else if(idade <50) {
                    gênero = 'mulher'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotoadulF.jpg'
              } else {
                    gênero = 'senhora'
                    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.` 
                    img.src = 'img/fotovelF.jpg'
            }

        }    
         
   }
}