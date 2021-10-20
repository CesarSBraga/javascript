function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
// var hora = 8
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <12){
    // Bom dia
    img.src = 'imagens/manha2.JPG'
    document.body.style.background = '#ddb578'
}else if (hora >= 12 && hora <= 18){
    // Boa tarde
    img.src ="imagens/tarde2.JPG"
    document.body.style.background = '#e6e0d8'
}else{
    // Boa noite
    img.src ="imagens/noite2.JPG"
    document.body.style.background = '#141413'
}
}