const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

var CountDown = function(time, elementId)
{
	this.timePassed = 0;
	this.timeLeft = time;
	this.timeLimit = time;
	this.timerInterval = null;
	this.remainingPathColor = COLOR_CODES.info.color;

	document.getElementById(elementId).innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${this.remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    this.timeLeft
  )}</span>
</div>
`;

}
CountDown.prototype.stopTimer = function()
{
	clearInterval(this.timerInterval);
} 
CountDown.prototype.startTimer = function()
{
	this.timerInterval = setInterval(() => {
		this.timePassed = this.timePassed += 1;
		this.timeLeft = this.timeLimit - this.timePassed;
		document.getElementById("base-timer-label").innerHTML = formatTime(
		  this.timeLeft
		);
		setCircleDasharray(this.timeLeft, this.timeLimit);
		setRemainingPathColor(this.timeLeft);
	
		if (this.timeLeft === 0) {
		  this.onTimesUp();
		}
	  }, 1000);
}
CountDown.prototype.onTimesUp = function()
{
	clearInterval(this.timerInterval);
}

function setRemainingPathColor(timeLeft) {
	const { alert, warning, info } = COLOR_CODES;
	if (timeLeft <= alert.threshold) {
	  document
		.getElementById("base-timer-path-remaining")
		.classList.remove(warning.color);
	  document
		.getElementById("base-timer-path-remaining")
		.classList.add(alert.color);
	} else if (timeLeft <= warning.threshold) {
	  document
		.getElementById("base-timer-path-remaining")
		.classList.remove(info.color);
	  document
		.getElementById("base-timer-path-remaining")
		.classList.add(warning.color);
	}
  }

  function calculateTimeFraction(timeLeft, timeLimit) {
	const rawTimeFraction = timeLeft / timeLimit;
	return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray(timeLeft, timeLimit) {
	const circleDasharray = `${(
	  calculateTimeFraction(timeLeft, timeLimit) * FULL_DASH_ARRAY
	).toFixed(0)} 283`;
	document
	  .getElementById("base-timer-path-remaining")
	  .setAttribute("stroke-dasharray", circleDasharray);
  }
  function formatTime(time) {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
  
	if (seconds < 10) {
	  seconds = `0${seconds}`;
	}
  
	return `${minutes}:${seconds}`;
  }




