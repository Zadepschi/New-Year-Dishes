const searchInput = document.querySelector("#search");
const dishes = document.querySelectorAll(".dish");

searchInput.addEventListener("keyup", function(event){

    const word = event.target.value.toLowerCase();
    dishes.forEach(item => {  
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
})
 })