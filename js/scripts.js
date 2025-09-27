const products = [
    {
        id: 1,
        name:"bicleta",
        price: 1500,
        description:"Notebook de 13 polegadas com desempenho inovador de IA no dispositivo e Snapdragon® X Elite, além da incrível duração da bateria de vários dias.",
        image: "img/products/del-xps-13.png",
        active: true
    },
    {
        id: 2,
        name:"patins",
        price: 600,
        description:"Notebook de 13 polegadas com desempenho inovador de IA no dispositivo e Snapdragon® X Elite, além da incrível duração da bateria de vários dias.",
        image: "img/products/del-xps-13.png",
        active:true
    },
    {
        id: 3,
        name:"skate",
        price: 350,
        description:"Notebook de 13 polegadas com desempenho inovador de IA no dispositivo e Snapdragon® X Elite, além da incrível duração da bateria de vários dias.",
        image: "img/products/del-xps-13.png",
        active: false
    },

]
const productList= document.querySelector("#products")
//productList.innerHTML="<h1> davi </h1>" 

let html=""
for(let cont=0;cont < products.length; cont++){
   // if(products[cont].active){
    html=html + `<div class="product-item ${!products[cont].active ? 'inactive' : ''    }">
    <h2 class="product-title">${products[cont].name}</h2>
    <div class="product-image">
        <img src="${products[cont].image}" alt="">
    </div>
    <div class="product-description">
        <p>${products[cont].description}
        </p>
    </div>
    <div class="product-price">
    ${products[cont].price}
    </div>
    <div class="product-add-to-cart">
        <button class="btn-add-to-cart">adicionar ao carrinho</button>

    </div>
    ${!products[cont].active ? "indisponivel" : "disponivel"}
</div>`
//}

}
productList.innerHTML=html
    




function addToCart(productId){
    alert(productId + " adicionado ao seu carrinho")
}