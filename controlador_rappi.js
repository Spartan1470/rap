const nombre_cliente="matteo"
let direccion_cliente="poblado"
let telefono_cliente="1234567"
let metodo_pago_cliente="effectivo"

let nommbre_repartidor="madrid"
let identificacion_repartidor="0987654"
let ubicacionrepartidor="monterrey"

let nombre_tienda="el portal"
let nombre_producto="tiramizu"
let precio_unitario_producto=40000
let cantidad_producto=4

const IVA=0.19

const tiene_descuento=true


let valor_neto=precio_unitario_producto*cantidad_producto
let valor_IVA=valor_neto*IVA
let valor_impuesto=valor_neto+valor_IVA
let valor_total=valor_impuesto-10000

console.log(".....................................")
console.log("..................RAPPI..............")
console.log(".....................................")
console.log(`nombre del producto:${nombre_producto}`)
console.log(`precio unitario:${precio_unitario_producto}`)
console.log(`cantidad de producto:${cantidad_producto}`)
console.log(`precio total:${valor_total}`)

