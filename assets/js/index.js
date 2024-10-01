



// pop-up closing funtionality
let items=  document.getElementsByClassName("pop-up")
document.getElementById('first-item').addEventListener('click',()=>{
 
  items[0].style.display='block'
 
  items[0].classList.add("open");
  items[1].style.display='none'
  items[2].style.display='none'
  items[3].style.display='none'
 
})
document.getElementById('second-item').addEventListener('click',()=>{
 
  items[1].style.display='block'
  items[0].style.display='none'
 
  items[2].style.display='none'
  items[3].style.display='none'
  

})
document.getElementById('third-item').addEventListener('click',()=>{
 
  items[2].style.display='block'
  items[0].style.display='none'
  items[1].style.display='none'
  
  items[3].style.display='none'
  

})
document.getElementById('last-item').addEventListener('click',()=>{
  
  items[3].style.display='block'
  items[0].style.display='none'
  items[1].style.display='none'
  items[2].style.display='none'
 
  

})

//close pop-up
let closed=document.getElementsByClassName('close')

//   }
closed[0].addEventListener('click',(e)=>{
   
     items[0].style.display='none'


})
closed[1].addEventListener('click',(e)=>{
   
     items[1].style.display='none'


})
closed[2].addEventListener('click',(e)=>{
   
     items[2].style.display='none'


})
closed[3].addEventListener('click',(e)=>{
   
     items[3].style.display='none'


})

//when click out-side of the pop-up and it will be closed

// document.addEventListener('click', (event) => {
//     console.log(items)
  
//     if (items[0].classList.contains('open')&&!items[0].contains(event.target) ) {
      
//        items[1].style.display='none'
//     }
//   });

