let input = document.getElementById("inputtext");
let count = document.getElementById("count");
let remaincount = document.getElementById("remcount")

input.addEventListener("input",()=>{
    update();
})

function update(){
    count.innerHTML = input.value.length;
    remaincount.innerHTML = input.getAttribute("maxLength") - input.value.length;
}


