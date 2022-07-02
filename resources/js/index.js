$(document).ready(() => {
    console.log('atteh')


   

    document.querySelector('.menu-container').addEventListener('click', (event)=>{
        $('.menu').toggle()
        
    })
    
})


 function myFunction(x) {
        x.classList.toggle("change");

    }