const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

const lottoNumbers = [];
const colors = ["tomato","teal","orange","purple","blue"];

drawButton.addEventListener("click",function(){

const paintNumber = function(numbers){
    const eachNumDiv = document.createElement("div");
    let colorIndex = Math.floor(numbers / 10);
    eachNumDiv.style.backgroundColor = colors[colorIndex];
    eachNumDiv.classList.add("eachnum");
    eachNumDiv.textContent = numbers;
    numbersDiv.appendChild(eachNumDiv);
}

while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
        lottoNumbers.push(ran)
        paintNumber(ran)
    }
}
console.log(lottoNumbers);
})


resetButton.addEventListener("click",function(){
    lottoNumbers.splice(0,6);
    numbersDiv.innerHTML="";
})
