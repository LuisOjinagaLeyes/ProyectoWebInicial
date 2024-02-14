function girarImg (caja) {

var cajaRedes = document.getElementById (caja)

    if (cajaRedes.style.display == 'none') {
        cajaRedes.style.display = 'block'
    } else {
        cajaRedes.style.display = 'none'
    }
}