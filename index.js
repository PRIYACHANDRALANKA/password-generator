const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let output1EL = document.getElementById("output1-el")
let output2EL = document.getElementById("output2-el")

function Generate() {
    let index1 = Math.floor(Math.random() * characters.length)
    let index2 = Math.floor(Math.random() * characters.length)
    let index3 = Math.floor(Math.random() * characters.length)
    let index4 = Math.floor(Math.random() * characters.length)
    let index5 = Math.floor(Math.random() * characters.length)
    let index6 = Math.floor(Math.random() * characters.length)
    let index7 = Math.floor(Math.random() * characters.length)
    let index8 = Math.floor(Math.random() * characters.length)
    let index9 = Math.floor(Math.random() * characters.length)
    let index10 = Math.floor(Math.random() * characters.length)
    let index11 = Math.floor(Math.random() * characters.length)
    let index12 = Math.floor(Math.random() * characters.length)
    let index13 = Math.floor(Math.random() * characters.length)
    let index14 = Math.floor(Math.random() * characters.length)
    let index15 = Math.floor(Math.random() * characters.length)
    
    let index16 = Math.floor(Math.random() * characters.length)
    let index17 = Math.floor(Math.random() * characters.length)
    let index18 = Math.floor(Math.random() * characters.length)
    let index19 = Math.floor(Math.random() * characters.length)
    let index20 = Math.floor(Math.random() * characters.length)
    let index21 = Math.floor(Math.random() * characters.length)
    let index22 = Math.floor(Math.random() * characters.length)
    let index23 = Math.floor(Math.random() * characters.length)
    let index24 = Math.floor(Math.random() * characters.length)
    let index25 = Math.floor(Math.random() * characters.length)
    let index26 = Math.floor(Math.random() * characters.length)
    let index27 = Math.floor(Math.random() * characters.length)
    let index28 = Math.floor(Math.random() * characters.length)
    let index29 = Math.floor(Math.random() * characters.length)
    let index30 = Math.floor(Math.random() * characters.length)
    
    output1EL.textContent = characters[index1] + characters[index2] + characters[index3] + characters[index4] + characters[index5] + characters[index6] + characters[index7] + characters[index8] + characters[index9] + characters[index10] + characters[index11] + characters[index12] + characters[index13] + characters[index14] + characters[index15]
    
    output2EL
    .textContent =  characters[index16] + characters[index17] + characters[index18] + characters[index19] + characters[index20] + characters[index21] + characters[index22] + characters[index23] + characters[index24] + characters[index25] + characters[index26] + characters[index27] + characters[index28] + characters[index29] + characters[index30]
}


