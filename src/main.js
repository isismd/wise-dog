const btn = document.getElementById('another_btn');
const text = document.getElementById('advice');
const dog = document.getElementById('picture');
const adjective = document.getElementById('author');

document.addEventListener("DOMContentLoaded", getRandomAdvice)
document.addEventListener("DOMContentLoaded", getRandomDog)
document.addEventListener("DOMContentLoaded", getRandomAdjective)
btn.addEventListener('click', getRandomDog);
btn.addEventListener('click', getRandomAdvice);
btn.addEventListener('click', getRandomAdjective);

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

function getRandomAdjective(){
     
      
	var theAdjective= [
	  '- Random Dog',
	  '- Mr. Dog',
	  '- Happy Dog',
	  '- Confused Dog',
	  '- Super Dog',
	  '- Silly Dog',
	  '- Nice Dog',
	  '- Funny Dog',
	  '- Tired Dog',
	  '- Important Dog',
	  '- Cool Dog',
	  '- Suspicious Dog',
	  '- Mysterious Dog',
	];

	
	var wordNum = Math.floor(Math.random() * theAdjective.length);
	adjective.innerHTML = theAdjective[Math.floor(Math.random() * theAdjective.length)];
}