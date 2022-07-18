class Producto{
    constructor(id,nombre,marca,precio,stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    } 
}

const producto1 = new Producto(1,"TV","samsumg",2.0000,10);
const producto2 = new Producto(2,"Celular","Appel",3.50000,25);
const producto3 = new Producto(3,"tablet","Hp",500.000,15);
const producto4= new Producto(4,"Headphones","Sonny",500.00,20);
const producto5= new Producto(5,"teclados","esenses",400,10);

const productos = [producto1,producto2,producto3,producto4,producto5]

const divProductos = document.getElementById('Productos')

productos.forEach(producto => {
    divProductos.innerHTML += `
       <div class="card productos" id= "productos${producto.id}" 
       style="width: 18rem;">    
         <div class="card-body">
         <h5 class="card-title">${producto.nombre}</h5>
         <p class="card-text">Marca: ${producto.marca}</p>
         <p class="card-text">Precio: ${producto.precio}</p>
         <p class="card-text"> Stock: ${producto.stock}</p>
         
         </div>
    </div>
  `
})

