const btn = document.querySelectorAll(".btn-toggle")

btn.forEach((b)=>{
    b.addEventListener("click", ()=>{
        let content = b.nextElementSibling;
        content.classList.toggle("length")
        b.classList.toggle("active")
    })
})

// for(var i = 0; i < btn.length; i++){
//     btn[i].addEventListener("click", ()=>{
//         alert("hi")
//     })
// }