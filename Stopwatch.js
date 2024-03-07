let hours = 0;
let minutes = 0;
let seconds = 0;
let micro = 0;
showTime();
function showTime() {
    document.querySelector('.hours-div').innerHTML = `
    <h1 class="hours">${padZero(hours)}<span class="hr-unit">Hr</span>
    </h1>
    `;
    document.querySelector('.minutes-div').innerHTML = `                
    <h1 class="minutes">${padZero(minutes)}<span class="min-unit">Min</span>
    </h1>`;
    document.querySelector('.seconds-div').innerHTML = `                
    <h1 class="seconds">${padZero(seconds)}<span class="sec-unit">Sec</span>
    </h1>`;    
    document.querySelector('.micro-div').innerHTML = `                
    <h1 class="micro">${padZero(micro)}<span class="micro-unit">Ms</span>
    </h1>`;
}
    
function padZero(number) {
    number = (number < 10 ? '0' : '') + number;
    return number;
}

const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');

startButton.addEventListener('click' , () => {
    console.log('start');
    startTimer();
});

stopButton.addEventListener('click' , () => {
    console.log('stop');
    stopTimer();
});

resetButton.addEventListener('click' , () => {
    console.log('reset');
    resetTimer();
})


let intervalId;

function startTimer() {
    intervalId = setInterval(() => {
        micro++;
        if(micro === 100){
            seconds++;
            micro = 0;
        }

        if(seconds === 60){
            minutes ++;
            seconds = 0;
        }
        else if(minutes === 60){
            hours++;
            minutes = 0;
        }
        
        showTime();
    }, 10);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    micro = 0;
    showTime();
    clearInterval(intervalId); 
}