const btn=document.querySelector("#btn")
let randomColor=()=>{
  let val="123456789ABCDEF"
  let hash="#"
  for(i=0;i<6;i++){
    hash=hash+val[Math.floor(Math.random()*val.length)]
    btn.innerHTML=hash
  }
  return hash
    
}
let changeColor=()=>{
  document.body.style.backgroundColor=randomColor()
}
btn.addEventListener("click",changeColor)
