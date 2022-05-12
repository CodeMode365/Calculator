const numericButn=Array.from(document.querySelectorAll('.num'));
const functionalButton=Array.from(document.querySelectorAll('.fun'));

const ArraySotre = [...numericButn,...functionalButton]
console.log(ArraySotre)
// console.log(screenTxt)
// const screenTxt = document.querySelector('.screen-text').innerText;

ArraySotre.forEach((currEle)=>{
    currEle.addEventListener('click', ()=>{
        //to be executed when equel to is pressed
// const screenTxt = Number(document.querySelector('.screen-text').innerHTML);
// const num1  = Number(currEle.innerHTML);
// const screenData = screenTxt;
// const NewValue = num1+screenData;
// console.log(NewValue)
// const screenValue = document.getElementById('value');

// screenValue.innerText=NewValue;
// console.log('working')
// console.log(currEle.innerHTML)


//To add character on screen when clicked
const screenTxt = document.querySelector('.screen-text').innerHTML;
const screenValue = document.getElementById('value');
const clickedChar = currEle.innerHTML;
const finalText = screenTxt+clickedChar;
screenValue.innerHTML=finalText

})
})