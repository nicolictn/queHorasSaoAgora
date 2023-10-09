function carregar() {
    var msg = document.querySelector('p#msg')
    var img = document.querySelector('img#imagem')
    var des = document.querySelector('div#des')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 15
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/dia.jpg'
        document.body.style.background = '#ECB97F'
        des.innerHTML = 'Tenha um ótimo dia!'

    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#DF6C0E'
        des.innerHTML = 'Que tarde maravilhosa!'

    } else {
        // BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#000F34'
        des.innerHTML = 'Desejo uma ótima noite!'
    }
}
