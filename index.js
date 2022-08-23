const audioEl = document.getElementById('notificationNoise');
const timeCounterEl = document.getElementById('timeCounter');
const startButtonEl = document.getElementById('startButton');
const stopButtonEl = document.getElementById('stopButton');
const headerEl = document.getElementById('header');

const Run = 5;
const Rest = 60;
const timeRun = Run * 1000;
const timeRest = Rest * 1000;

// fxns here

//sets up the running timer
const runTime = () => {
    //changes the header to match the current state
    headerEl.textContent = `Run😈`;

    //sets up the duration of how long this alarm has been running for
    var durationRun = 0;

    //executes the alarm and starts the rest timer
    const runNote = () => {
        audioEl.play();
        clearInterval(runIntInt);
        restTime();
    };

    const runInt = () => {
        //changes the value of the timer to match what it is rn
        timeCounterEl.textContent = `${Run - durationRun} seconds left!`;
        durationRun++;
    };

    var runIntInt = setInterval(runInt, 1000);
    const runTimeOut = setTimeout(runNote, timeRun);

    //sets up the stop fxn
    const stopRun = () => {
        timeCounterEl.textContent = 'All finished!';
        headerEl.textContent = `30-60 Timer`;

        clearInterval(runIntInt);
        clearTimeout(runTimeOut);
    }

    stopButtonEl.addEventListener("click", stopRun);
};

//sets up the rest timer
const restTime = () => {
    //changes the header to match the current state
    headerEl.textContent = `Rest😫`;

    //sets up the duration of how long this alarm has been running for
    var durationRest = 0;

    //executes the alarm action and starts up the run timer
    const restNote = () => {
        audioEl.play();
        clearInterval(restIntInt);
        runTime();
    };

    const restInt = () => {
        //changes the value of the timer to match what it is rn
        timeCounterEl.textContent = `${Rest - durationRest} seconds left!`;
        durationRest++;
    }

    var restIntInt = setInterval(restInt, 1000);
    const restTimeOut = setTimeout(restNote, timeRest);

    //sets up the stop fxn
    const stopRest = () => {
        timeCounterEl.textContent = 'All finished!';
        headerEl.textContent = `30-60 Timer`;

        clearInterval(restIntInt);
        clearTimeout(restTimeOut);
    }

    stopButtonEl.addEventListener("click", stopRest);
};

startButtonEl.addEventListener("click", runTime);
