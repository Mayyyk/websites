// import variables from './css/variables.css'


const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const stopBtn = document.querySelector('.reset-btn');
const deleteBtn = document.querySelector('.delete-btn');
const archieveBtn = document.querySelector('.archieve-btn');
const infoBtn = document.querySelector('.fa-question');
const closeBtn = document.querySelector('.close');
const time = document.querySelector('.time');
const timeList = document.querySelector('.archieve-ul');
const infoShadow = document.querySelector('.info-shadow');
const lastTime = document.querySelector('.last-time');
const colors = document.querySelector('.fa-paintbrush')
const colorBtn1 = document.querySelector('.one')
const colorBtn2 = document.querySelector('.two')
const colorBtn3 = document.querySelector('.three')

let countTime;
let minutes = 0;
let seconds = 0;
let times = [];
let i = 0;

const start = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			console.log(seconds);
			time.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			console.log(seconds);
			time.textContent = `${minutes}:${seconds}`;
		} else {
			seconds = 0;
			minutes++;
			time.textContent = `${minutes}:00`;
		}
	}, 200);
};

const pause = () => {
	clearInterval(countTime);
};

const stop = () => {
	lastTime.innerHTML = `Ostatni czas: ${time.textContent}`;

	if (time.textContent !== '0:00') {
		lastTime.style.visibility = 'visible';
		times.push(time.textContent);
		console.log(times);
	}

	clear();
};

const reset = () => {
	clear();
	i = 0;
	lastTime.style.visibility = 'hidden';
	times = [];
};

const clear = () => {
	clearInterval(countTime);
	time.textContent = `0:00`;
	timeList.textContent = '';
	minutes = 0;
	seconds = 0;
};

const showArchieve = () => {
	i = 0;
	timeList.textContent = '';
	times.forEach((time) => {
		i++;
		const newTime = document.createElement('li');
		newTime.innerHTML = `<p>Pomiar nr ${i}: </p><span>${time}</span>`;
		timeList.appendChild(newTime);
	});
};

const showInfo = () => {
	if (!(infoShadow.style.display === 'block')) {
		infoShadow.style.display = 'block';
	} else {
		infoShadow.style.display = 'none';
	}
	infoShadow.classList.toggle('info-animation');
};










playBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);
deleteBtn.addEventListener('click', reset);
archieveBtn.addEventListener('click', showArchieve);
infoBtn.addEventListener('click', showInfo);
closeBtn.addEventListener('click', showInfo);
window.addEventListener('click', (e) =>
	e.target === infoShadow ? showInfo() : false
);
