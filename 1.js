let link = document.querySelectorAll("a")
let img = document.querySelector('img')

link.forEach(element => {
    element.addEventListener('mouseover', (event)=>{  
        event.target.style.backgroundColor = 'blue'
        event.target.style.padding = '6px'
        event.target.style.fontSize = '20px'
        event.target.style.fontWeight = 'bold'
    })
    
    element.addEventListener('mouseout' , (event)=>{
        event.target.style.backgroundColor = 'rgb(165, 140, 255)'
        event.target.style.padding = '4px'
        event.target.style.fontSize = '1em'
        event.target.style.fontWeight = 'normal'
    })
});

img.addEventListener('mouseover', (event)=>{
    event.target.style.border = '6px dotted red'
})

img.addEventListener('mouseout', (event)=>{
    event.target.style.border = 'none'
})


