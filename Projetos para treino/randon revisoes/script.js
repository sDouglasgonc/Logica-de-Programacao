const reviews = [
{
id:1,
name: "Luciana Regina",
job: "Costureira",
img:"./mainha.png",
text:"Costureira de mão Cheia amet consectetur adipisicing elit. Quidem laboriosam nobis blanditiis,corporis accusamus repudiandae, dolores ab corrupti, rerum eos ipsa asperiores quaerat.Esse error accusantium, ullam fugit deleniti doloribus.",
},
{
id:2,
name: "Genival Gonçalo",
job: "Barbeiro",
img:"./painho.png",
text:"Barbeiro Profissional primeiro de luxo amet consectetur adipisicing elit. Quidem laboriosam nobis blanditiis,corporis accusamus repudiandae, dolores ab corrupti, rerum eos ipsa asperiores quaerat.Esse error accusantium, ullam fugit deleniti doloribus.",
},
{
id:3,
name: "José Denison",
job: "Cursando Radiologia",
img:"./ardeninho.png",
text:"sacudo portoso maluquinho que sou fã a,corporis accusamus repudiandae, dolores ab corrupti, rerum eos ipsa asperiores quaerat.Esse error accusantium, ullam fugit deleniti doloribus.",
},
{
    id:4,
    name: "Albertino jones",
    job: "Desenvolvedor Backend",
    img:"./homemadulto.png",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laboriosam nobis blanditiis,corporis accusamus repudiandae, dolores ab corrupti, rerum eos ipsa asperiores quaerat.Esse error accusantium, ullam fugit deleniti doloribus.",
    },
]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// setar o item de inicio

let currentItem = 0;

// carregar o item inicial
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem)
})

// mostrar a pessoa baseado no item
function showPerson(person){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// mostar proximo item

nextBtn.addEventListener("click",function(){
    currentItem++
    if(currentItem > reviews.length - 1){
currentItem = 0
    }
    showPerson()
})
//mostrar item anterior
prevBtn.addEventListener("click",function(){
    currentItem--
    if(currentItem < 0){
currentItem = reviews.length -1
    }
    showPerson()
})

randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson()
})