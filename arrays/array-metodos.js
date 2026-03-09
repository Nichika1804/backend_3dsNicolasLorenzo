// crie um array que contenha 3 frutas
// adicione 4 furtas com o método .push(<nomeFruta)
// remova 1 fruta com .pop()
// faça um loop for que remova todas as frutas 
// verifique, se todas as frutas foram removidas 
// imprima "Nenhuma fruta encontrada"

const frutas = ['morango', 'uva', 'maça']
console.log(frutas)
frutas.push('limão')
frutas.push('tomate')
frutas.push('banana')
frutas.push('melancia')

console.log(frutas.length)
while (frutas.length > 0) {
    frutas.pop
    if(frutas.length == 0){
        console.log("Não há frutas para vender!!!")
    }
}
console.log(frutas)
console.log(frutas.length)