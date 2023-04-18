const btn = document.querySelector(".change-btn")
const change = document.querySelector(".switch")
const day = document.querySelector(".night")

document.addEventListener("click", () => {
    if(!btn.classList.contains("slide")){
btn.classList.add("slide","change-color")
day.classList.add("day")
    }
    else{
        day.classList.remove("day")
        btn.classList.remove("slide","change-color")
    }
})