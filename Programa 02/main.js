function calcular() {
    var data = new Date()
    var ano = data.getFullYear

    var nasc = document.querySelector('txtano')
    var born = Number(born.value)
    var res = document.querySelector('res')

    res.innerHTML = `${ano - born}`
}