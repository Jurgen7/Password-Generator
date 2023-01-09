const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let box = document.getElementById("box")
let box2 = document.getElementById("box2")
let passGenerate = document.getElementById("generate")

passGenerate.addEventListener("click", function() {
     box.textContent = generate()
     box2.textContent = generate()

})

function generate() {
   let box = ""
   
   for( i = 0; i < 15; i++){
       
        let passwordOne = Math.floor(Math.random() * characters.length)
           
        box += characters[passwordOne]
    } 
     
    return box       
}

   
        
   





