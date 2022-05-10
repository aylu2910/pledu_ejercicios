const calcularMontoTotal = (detalleProducto) => detalleProducto.precio* detalleProducto.artículos

const listarProductosTotal = (detalleProductos) => {
    let productosDetalleTotal = []
    
    for (producto of detalleProductos) {
        productosDetalleTotal.push({ [producto.nombre] : calcularMontoTotal(producto) })
    }

    console.log(productosDetalleTotal)

}

listarProductosTotal([{ nombre: "Samsung TV", precio: 6000, artículos:10}, 
{nombre: "DELL notebook", precio: 4000, artículos:30 },
{nombre:"Auriculares Sony", precio: 1500, artículos:15},
{nombre:"Monitor Philips", precio:12000, artículos:20},
{nombre:"Teclado logitech", precio: 3000, artículos:5}])
