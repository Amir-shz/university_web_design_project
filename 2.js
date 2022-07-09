let h1 = document.querySelector("h1")
let h2 = document.querySelectorAll("h2")

h1.addEventListener('mouseover', (e)=>{
    e.target.style.color = 'red'
})

h1.addEventListener('mouseout', (e)=>{
    e.target.style.color = 'black'
})

h2.forEach(element => {
    element.addEventListener('mouseover', (event)=>{  
        event.target.style.color = 'red'
        event.target.style.fontWeight = 'bold'
    })
    
    element.addEventListener('mouseout' , (event)=>{
        event.target.style.color = 'black'
    })
});