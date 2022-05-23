const calcularMontoTotal = (detalleProducto) => detalleProducto.precio * detalleProducto.articulos

const listarProductosTotal = (detalleProductos) => {
    let productosDetalleTotal = []
    
    for (producto of detalleProductos) {
        productosDetalleTotal.push({ [producto.nombre] : calcularMontoTotal(producto) })
    }

    return productosDetalleTotal

}

listarProductosTotal([{ nombre: "Samsung TV", precio: 6000, articulos:10}, 
{nombre: "DELL notebook", precio: 4000, articulos:30 },
{nombre:"Auriculares Sony", precio: 1500, articulos:15},
{nombre:"Monitor Philips", precio:12000, articulos:20},
{nombre:"Teclado logitech", precio: 3000, articulos:5}])
