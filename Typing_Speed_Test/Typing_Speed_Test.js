const typing_ground = document.querySelector('#textarea');
const  BTn = document.querySelector('#btn');
const  Score = document.querySelector('#score');
const show_Sentence = document.querySelector('#ShowSentense');

let startTime,endTime,totalTimeTaken;

const  sentences = ['hello world1','hello world jan2','hello world khan3'];

// Step 1
BTn.addEventListener('click',()=>{
    switch (BTn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping()
            break;
        case "done":
            typing_ground.setAttribute('disabled',"true");
             endTyping()
            break;
    }
})
// Step2
const startTyping = ()=>{
    let Randomvalue = Math.floor(Math.random()*sentences.length);
    show_Sentence.innerHTML = sentences[Randomvalue];
    let date = new Date();
    startTime = date.getTime();

    BTn.innerText = "Done";
}
// Step 3
const endTyping = ()=>{
    BTn.innerText = "Start";

    let date = new Date()
    endTime = date.getTime();
    totalTimeTaken = (endTime-startTime)/100;
    calculateTypingSpeed(totalTimeTaken);
    show_Sentence.innerHTML = "";
    typing_ground.value = "";
}
const calculateTypingSpeed = (timing)=>{
    let totalWord = typing_ground.value.trim();
    let actualWord = totalWord === "" ? 0 : totalWord.split("").length;
    if (actualWord !== 0){
        let TypingSpeed = (actualWord/timing)*60;
        TypingSpeed = Math.round(TypingSpeed);
        Score.innerHTML = `your typing speed is ${TypingSpeed} word ${actualWord} time Taken ${timing}`;
    }else{
        Score.innerHTML = `you are 0 and actualy  time takin is ${timing}`
    }
}