let valores = [8,1,7,4,5]
valores.sort()
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}
*/
for (const pos in valores) {
    if (Object.hasOwnProperty.call(valores, pos)) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
        
    }
}