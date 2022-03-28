const btn = document.getElementById('another_btn');
const text = document.getElementById('advice');
const dog = document.getElementById('picture');

document.addEventListener("DOMContentLoaded", getRandomAdvice)
document.addEventListener("DOMContentLoaded", getRandomDog)
btn.addEventListener('click', getRandomDog);
btn.addEventListener('click', getRandomAdvice);

function getRandomAdvice() {
	fetch('https://api.adviceslip.com/advice')
		.then(res => res.json())
		.then(data => {
			text.innerHTML = data.slip.advice;
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog.innerHTML = `<img src=${data.url} alt="dog picture" height="400" width="400"  />`;
			}
		});
}
