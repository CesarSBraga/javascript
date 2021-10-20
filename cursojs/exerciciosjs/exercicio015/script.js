function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] Verifique a data novamente')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
    //    res.innerHTML = `idade calculada: ${idade}`
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'masculino'
        if(idade >= 0 && idade < 10){
            // criança
            img.setAttribute('src','./imagens/menino.jpg')
         } else if(idade < 21){
                // jovem
            img.setAttribute('src','./imagens/homemadolescente.jpg')
            }else if(idade < 50){
                // adulto
            img.setAttribute('src', './imagens/homem.jpg')
            }else{
                // idoso
            img.setAttribute('src','./imagens/homemidoso.jpg')
            }
        
    }else if(fsex[1].checked){
        genero = 'feminino'
    }if(idade >= 0 && idade < 10){
            // criança
            img.setAttribute('src','./imagens/menina.jpg')
     } else if(idade < 21){
                // jovem
            img.setAttribute('src', './imagens/mulheradolescente.jpg')
            }else if(idade < 50){
                // adulto
            img.setAttribute('src', './imagens/mulher.jpg')
            }else{
                // idoso
            img.setAttribute('src', './imagens/mulheridosa.jpg')
            }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    

}