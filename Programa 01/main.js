function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()


    msg.innerHTML = `São ${hora} horas`

    if(hora >= 0 && hora <12) {
    img.src = 'img/fotomanha.jpg'                   // Mudar a imagem sem precisar de tags
    document.body.style.background = '#FFF5E4'      //Mudar a cor de fundo

} else if (hora >= 12 && hora < 18 ) { 
    img.src = 'img/fototarde.jpg'                   // Mudar a imagem sem precisar de tags 
    document.body.style.background = '#F5BC67'       //Mudar a cor de fundo

    
    } else {
    img.src = 'img/fotonoite.jpg'                   // Mudar a imagem sem precisar de tags
    document.body.style.background = '#8E0613'      //Mudar a cor de fundo
        
    }
}