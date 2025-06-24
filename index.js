const navLinks=document.querySelectorAll("nav a")
navLinks.forEach(item=>{
  item.addEventListener("click",()=>{
    navLinks.forEach(e=>e.classList.remove("active"));
    item.classList.add("active")
  })
})
