export class Producto {

    public idProducto: Number;
    public nombre: String;
    public precio: Number;
    public imagen: String;

    constructor(id,n,p,i) {
        this.idProducto = id;
        this.nombre = n;
        this.precio = p;
        this.imagen = i;
    }
    
}