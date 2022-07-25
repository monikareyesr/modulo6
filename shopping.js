const fs = require('fs')

function escribir() {
    const list_mercado = 'fideos\nsalsas\npollo\ncarne\npavo'

    fs.writeFile('lista.txt', list_mercado, 'utf8', function () {
        console.log('archivo escrito correctamente');
        setTimeout(function () {
            leer()
        }, 2000)
    })
    // console.log('terminando ejecucion');
}

function leer() {
    fs.readFile('lista.txt', 'utf8', function (err, datos) {
        console.log(datos)
        setTimeout(function () {
            renombrar()
        }, 2000)
    })
    //console.log('terminando ejecucion')
}

function renombrar() {
    fs.rename('lista_txt', 'lista_super.txt', function () {
        console.log('ahora me llamo lista_super');
        setTimeout(function () {
            eliminar()
        }, 2000)
    })
    // console.log('terminado ejecucion');
}

function eliminar() {
    fs.unlink('.txt', function () {
        console.log('archivo eliminado');
    })
    // console.log('archivo eliminado');
}

escribir()
 //leer ()
 //renombrar()
 //eliminar()