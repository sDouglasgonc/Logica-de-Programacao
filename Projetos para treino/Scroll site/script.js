// ******* SETAR O DATE ******

const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear();

// ******* FECHAR OS LINKS ******
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

// ******* ABOUT PAGE **********
const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function(e){
    const id = e.target.dataset.id
    if(id){
    //remover o active dos outros botões
    btns.forEach(function(btn){
        btn.classList.remove("active")
        e.target.classList.add("active")
    })
    articles.forEach(function(article){
        article.classList.remove("active")
    })
    const element = document.getElementById(id)
    element.classList.add("active")
    }
    })

navToggle.addEventListener("click", function(){
   // linksContainer.classList.toggle("show-links")
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height
  
   if(containerHeight === 0){
linksContainer.style.height = `${linksHeight}px`
   }
   else{
    linksContainer.style.height = 0;
   }
})

const navbar = document.getElementById("nav")
const toplink = document.querySelector(".top-link")

// ***** NAVBAR FIXADA ****
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if(scrollHeight > navHeight){
    navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight > 500){
    toplink.classList.add("show-link")
    }
    else{
    toplink.classList.remove("show-link")
    }
})

// ****** SCROLL SUAVE ****** 
// selecionar links

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link){
link.addEventListener("click", function(e){
    //prevent default
    e.preventDefault()
    //navegar para um ponto específico
    const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id)
    //calcular as alturas
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect()
    .height
    const fixedNav = navbar.classList.contains("fixed-nav")
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
        position = position - navHeight
    }
    if(navHeight > 82){
        position = position + containerHeight
    }
    window.scrollTo({
        left: 0,
        top: position
    })
    linksContainer.style.height = 0
})
})