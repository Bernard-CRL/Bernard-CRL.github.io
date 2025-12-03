// const myHeading=document.querySelector("h1")

// myHeading.textContent="Hello World!"

const myImg=document.querySelector("img")

myImg.addEventListener("click",()=>{
    const mySrc= myImg.getAttribute("src")
    if (mySrc==="images/gob_machine.webp"){
        myImg.setAttribute("src","images/goblin_machine.jpg")
    } else{
        myImg.setAttribute("src","images/gob_machine.webp")
    }
})

let myButton=document.querySelector("button")
let myHeading=document.querySelector("h1")

function setUsername(){
    const myName=prompt("Please enter your name")
    if (!myName){
        setUsername()
    }
    localStorage.setItem("name",myName)
    myHeading.textContent= `Goblin Machine is cool, ${myName}`
}

if (!localStorage.getItem("name")){
    setUsername()
} else{
    const storedName= localStorage.getItem('name')
    myHeading.textContent=`Goblin Machine is cool, ${storedName}`
}
///
myButton.addEventListener("click",()=>{
    setUsername()
})

const li =document.getElementById("todo")
li.addEventListener("click", ()=>{
    const elements = document.getElementById('todo').getElementsByTagName('li')
    // use a for loop to iterate over all the elements of `elements` array and apply the styles
    for(let i=0; i<elements.length; i++){
        elements[i].style.color = 'green';
    }
})

