function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.legth == 0){
        alert('[ERRO] fatam dados')
    }else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
        } else {

        // Contagem regressiva
        for(let c = i; c>= f; c-=p){
            res.innerHTML += `${c}\u{1F60E}	`

        }
    }
res.innerHTML += `\u{1f3c1}`   
}
}
