const btn = document.querySelector(".change-btn")
const changeImg = document.querySelector(".img-container")

document.addEventListener("click", () => {
    if(!btn.classList.contains("slide")){
btn.classList.add("slide","change-color")
changeImg.classList.add("day")
    }
    else{
        changeImg.classList.remove("day")
        btn.classList.remove("slide","change-color")
    }
})