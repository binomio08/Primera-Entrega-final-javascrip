function saludo() {
    alert('Bienvenido a Stock-Plus')
}

function ioncorrecto(){
    alert('El Dato Ingresado es Incorrecto')
}

saludo()
let nombre = prompt('Ingrese su nombre:')

class Producto {
    constructor(nombre, precio,cantidad){
        this.nombre = nombre
        this.precio = parseFloat(nombre)
        this.cantidad = cantidad
        this.disponible = true
    }
    sumarIvaVeintiUno(){
        return this.precio * 1,21
    }
    vender(){
        this.disponible = false   
    }
    precioVenta(){
        return this.precio * 1,21 * 1,15

    }
}

const arrayProductos = []
do{
    let ingresoProducto = prompt('Hola '+nombre.toLocaleUpperCase()+ ' Ingrese nombre de Producto a agregar (listo) para terminar')
    if (ingresoProducto === 'listo' || ingresoProducto === "LISTO" || ingresoProducto === 'Listo'){
        break;
    }else {
        let nombreP = ingresoProducto
        let precioP = prompt('Ingrese Costo del Producto')
        let cantidadP = prompt('Ingrese Cantidad del Producto')
        arrayProductos.push(new Producto(nombreP, precioP, cantidadP))
    }
}
while (ingresoProducto != 'listo' || ingresoProducto != "LISTO" || ingresoProducto != 'Listo'){

console.log(arrayProductos)



for (let producto of arrayProductos) {
    document.write('<ul><li><h3>Nombre: ' + producto.nombre + '</h3></li>')
    document.write('<li><h3>Cantindad: ' + producto.cantidad + '</h3></li>')
    document.write('<li><h3>Precio: ' + producto.precio + '</h3></li>')
    document.write('<li><h3>Precio de Venta es: ' + producto.precioVenta() + '</h3></li></ul>')
}
}