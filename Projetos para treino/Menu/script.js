const menu = [
    {
       id:1,
       title:"Lasanha Bolonhesa",
       category:"Almoço",
       price: 23.00,
       img:"./imagens/lasanha.jpg",
       desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
    },
    {
        id:2,
        title:"X salada",
        category:"Cafe da Manha",
        price: 12.00,
        img:"./imagens/Xsalada.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:3,
        title:"Milkshake de chocolate",
        category:"Bebidas",
        price: 9.00,
        img:"./imagens/MKchocolate.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:4,
        title:"Misto quente",
        category:"Cafe da Manha",
        price: 3.00,
        img:"./imagens/misto.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:5,
        title:"Ravioli",
        category:"Almoço",
        price: 40.00,
        img:"./imagens/ravioli.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:6,
        title:"Milkshake de Morango",
        category:"Bebidas",
        price: 9.00,
        img:"./imagens/MKmorango.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:7,
        title:"Tapioca de charque",
        category:"Cafe da Manha",
        price: 7.00,
        img:"./imagens/TapiocaCharque.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:8,
        title:"Suco de Manga",
        category:"Bebidas",
        price: 4.00,
        img:"./imagens/sucomanga.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:9,
        title:"Strogonoff",
        category:"Almoço",
        price: 35.00,
        img:"./imagens/strogonoff.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
     {
        id:10,
        title:"Feijoada",
        category:"Jantar",
        price: 35.00,
        img:"./imagens/asauch.png",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias eveniet fuga impedit ut ipsum corrupti sed provident sit praesentium!"  
     },
]
const sectionCenter = document.querySelector(".section-center")

const container = document.querySelector(".btn-container")


// carregar itens
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
    displayMenuButtons();
})


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        //console.log(item)
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">R$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
        </article>`
            })
            displayMenu = displayMenu.join("")
            sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons(){
    const categories = menu.reduce(
        function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category)
            }
            return values
    },
    ["all",]
    )
    const categoryBtns = categories.map(function(category){
return ` <button class="filter-btn" type="button"
data-id=${category}>
${category}
</button>`
    })
    .join("");
container.innerHTML = categoryBtns
const filterBtns = container.querySelectorAll(".filter-btn")
// filtrar itens
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
            return menuItem
        }
    })
    //console.log(menuCategory)
    if(category === "all"){
displayMenuItems(menu)
    }else{
        displayMenuItems(menuCategory)
    }
    })

})
}