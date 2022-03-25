let generateBtn = document.querySelector(".btn");
let outputOne = document.getElementById("color1");
let outputTwo = document.getElementById("color2");
let codeOutput = document.querySelector(".code-output");
let body = document.querySelector(".body");
let copyBtn = document.getElementById("copybtn");
let hexString = "0123456789abcdef";
let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}
let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    codeOutput.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
    generateBtn.style = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;

    outputOne.style.background = colorOne;
   outputTwo.style.background = colorTwo;
}
outputOne.addEventListener("click", ()=>{
   
})
generateBtn.addEventListener("click", generateGrad);
window.onload = generateGrad;

copyBtn.addEventListener("click", () => {
    codeOutput.select();
    document.execCommand("copy");
   let toast = document.querySelector(".toast");
   toast.classList.add("show");
   setTimeout(() => {
    toast.classList.add("hide");
   }, 1000);
});
