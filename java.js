document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('.card-header');
    
    articles.forEach(function(article) {
        const plusBtn = article.querySelector('.plus');
        const minusBtn = article.querySelector('.minus');
        const quantityEl = article.querySelector('.quantity');
        
        let quantity = 0;
        
        plusBtn.addEventListener('click', function() {
            quantity++;
            updateQuantity();
        });
        
        minusBtn.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                updateQuantity();
            }
        });
        
        function updateQuantity() {
            quantityEl.textContent = quantity;
        }
    });
});




const product= [
    {
        id: 0,
        Image:'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/zrhpg00meg0lsfrgkzkq/chaussure-air-force-1-flyknit-2-L5q9GR.png',
        title: 'Nike Air Max Plus',
        price: 30,
    },
    {
        id: 1,
        Image:'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/c6cnf0x5ggrmrysnryei/chaussure-air-max-plus-nJPFW8.png',
        title: 'Nike Air Max Plus',
        price: 30,
    },
    {
        id: 2,
        Image:'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4a88c0f3-790e-4815-8b04-92c3594e5a5b/short-sportswear-club-pour-j6XGkm.png',
        title: 'Nike Air Max Plus',
        price: 30,
    },
    {
        id: 3,
        Image:'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/ea8531b4-adc9-4bc0-a85c-de3b53d8808a/short-en-molleton-sportswear-club-fleece-pour-ado-pGqbp8.png',
        title: 'Nike Air Max Plus',
        price: 30,
    },

];
const categories = [...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map( (item)=>
{
    var {Image, title, price} = item;
    return(
        ` <div class='box'>
        <div class='img-box'>
        <img class='images' src=${Image}></img>
        </div>
        <div class='bottom' >
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart(a){
    let j = 0;

if(cart.lenght==0){
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
}
else{
    document.getElementById("cartItem").innerHTML = cart.map((item)=>
        {
            var {image, title, price} = items;
            return(
               `<div class='cart-item'>
                 <div class='row-img'>
                 <img class='rowing' src=${image}>
                 </div>
                 <p style=font-size:12px;'>${title}</p>
                 <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                 "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
}
    
}