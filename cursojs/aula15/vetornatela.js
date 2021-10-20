let valores = [8, 1, 7, 4, 3, 9]

// for(let pos = o; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// } 
// os dois codigos tem a mesma funcionalidade

for( let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}