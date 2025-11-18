
let statu = document.querySelector('#status')
let addf = document.querySelector('#addf')
let love = document.querySelector('#love')
let myimg = document.querySelector('#myimg')
let like = document.querySelector('#like')
let flag =0;
addf.addEventListener("click", function(){
   if(flag==0){
    statu.innerHTML="FRIEND"
    addf.innerHTML="Unfriend"
    flag=1;
   }else{
    statu.innerHTML= "NOT FRIEND"
    addf.innerHTML = "Add Friend"
    flag =0
   }
})
let loveFlag =0;
myimg.addEventListener("dblclick",function(){
   love.classList.remove("scale-[0]")
   love.classList.add("scale-[1]")
   setTimeout(function(){
      //love.classList.remove("scale-[3]")
      //love.classList.remove("duration-400 ease-in-out")
      //love.classList.add("scale-[0]")
      love.classList.remove('opacity-80')
      love.classList.add("opacity-0")
      love.classList.remove('scale-[1]')
      if(flag==1){
         like.classList.add('text-red-600')
      }
      
   },600)
   love.classList.remove('opacity-0')
   love.classList.add('opacity-80')
})

like.addEventListener("click",function(){
   if(flag==1){
      like.classList.add('text-red-600')
   }
   
})

