const products = [
    { id: "1", name: "Chorizo", description: "Chorizo con morron", category: "achuras", img: "../../../images/Chorizo.JPG", stock: 4 },
    { id: "2", name: "Asado", description: "Asado de novillo", category: "vaca", img: "../../../images/Asado.JPG", stock: 8 },
    { id: "3", name: "Carre", description: "Carre de cerdo", category: "cerdo", img: "../../../images/Carre.JPG", stock: 10 },
    { id: "4", name: "Matambrito", description: "Matambrito de cerdo", category: "cerdo", img: "../../../images/Matambrito.JPG", stock: 10 }
  ];
  
    export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      } else {
        reject("No se encontraron productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontro el producto solicitado")
        } else {
          resolve(product);
        }
       }, 1000 )
      
    });
}
