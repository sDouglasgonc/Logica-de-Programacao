let count = 0 

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn) {
btn.addEventListener("click", function(e){
   const styles =  e.currentTarget.classList
    if(styles.contains("decrescente")){
    count--;
    }else if(styles.contains("crescente")){
count++;
    }else{
        count = 0;
    }if(count > 0){
value.styles.color = "green"
    }if(count<0){
value.styles.color = "red"
    }if(count === 0){
value.styles.color = "#222"
    }
    value.textContent = count
})
})