const numericButn = Array.from(document.querySelectorAll('.num'));
const functionalButton = Array.from(document.querySelectorAll('.fun'));


alert("This project is current on development process")
const ArraySotre = [...numericButn, ...functionalButton]
// console.log(ArraySotre)
// console.log(screenTxt)
// const screenTxt = document.querySelector('.screen-text').innerText;

ArraySotre.forEach((currEle) => {
    currEle.addEventListener('click', () => {


        //To show character on screen when clicked
        const screenTxt = document.querySelector('.screen-text').innerHTML;
        const screenValue = document.getElementById('value');
        const clickedChar = currEle.innerHTML;
        const finalText = screenTxt + clickedChar;
        screenValue.innerHTML = finalText;
        if (clickedChar == 'AC' || currEle.innerHTML == 'C') {
            screenValue.innerHTML = '';
        }
        if(clickedChar == '='){
            let dataStore=screenValue.innerHTML;
            screenValue.innerHTML=dataStore.slice(0,dataStore.length-1);
            console.log((screenValue.innerHTML))
            console.log(typeof(screenValue.innerHTML))
            const ToPrint =Number(screenValue.innerHTML)
            const result = document.getElementById('result');
            console.log(ToPrint)
            console.log(ToPrint.T)
            result.innerHTML=ToPrint;


        }

        if(clickedChar =='Del'){
            // console.log(screenValue)
            let dataStore=screenValue.innerHTML;
            screenValue.innerHTML=dataStore.slice(0,dataStore.length-4);
            console.log()
            if(screenValue.innerHTML=='' && currEle.innerHTML =='Del'){
                screenValue.innerHTML='';
            }
        }
       

    
    })
})