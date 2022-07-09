let img = document.querySelectorAll('img')

img.forEach(item => {
    item.addEventListener('mouseover', (e)=>{
        e.target.style.width = '400px'
        e.target.style.height = '400px'
    })
    item.addEventListener('mouseout', (e)=>{
        e.target.style.width = '100%'
        e.target.style.height = '350px'
    })
});

