// entry button...

let btn = document.getElementById("btn");

// your choice....

let btnsUser = document.querySelectorAll(".u-btn");
let uResult = document.querySelector('.user-result')


//  computer choice...

let btnsComp = document.querySelectorAll(".c-btn");
let comResult = document.querySelector('.com-result')



let game = document.querySelector(".game");
let entry = document.querySelector(".entry");


// count....

let userCount = 0;
let comCount = 0;
let total = 5;


window.addEventListener("DOMContentLoaded", function () {


	btn.addEventListener("click", function () {
		entry.classList.toggle("hidden");
		game.classList.toggle("hidden");

	});

	// user selection...
	let computer = '';

	btnsUser.forEach(function (element) {
		element.addEventListener('click', function (e) {

			//  random number .....]
			let random = Math.floor(Math.random() * 3);
			console.log(random)
			e.currentTarget.classList.toggle("active:scale-75");
			// e.currentTarget.classList.toggle("bg-white");
			let userId = e.currentTarget.dataset.id;

			// computer choice..
			cArr = Array.from(btnsComp);
			computer = cArr[random];
			console.log(computer)
			computer.classList.toggle("scale-75");
			computer.classList.toggle("bg-white");

			let computerId = computer.dataset.id;

			// checking the validation


			if (userId == 'paper' && computerId == 'paper' || userId == 'scissor' && computerId == 'scissor' || userId == 'rock' && computerId == 'rock') {

				uResult.innerHTML = 'Draw';
				comResult.innerHTML = 'Draw';
			}
			if (userId == 'paper' && computerId == 'rock') {
				uResult.innerHTML = 'Won';
				comResult.innerHTML = 'Loss';
				userCount++;

			}
			if (userId == 'paper' && computerId == 'scissor') {
				uResult.innerHTML = 'Loss';
				comResult.innerHTML = 'Won';
				comCount++;
			}
			if (userId == 'rock' && computerId == 'paper') {
				uResult.innerHTML = 'Loss';
				comResult.innerHTML = 'Won';
				comCount++;
			}
			if (userId == 'rock' && computerId == 'scissor') {
				uResult.innerHTML = 'Won';
				comResult.innerHTML = 'Loss';
				userCount++;
			}
			if (userId == 'scissor' && computerId == 'rock') {
				uResult.innerHTML = 'Loss';
				comResult.innerHTML = 'Won';
				comCount++;
			}
			if (userId == 'scissor' && computerId == 'paper') {
				uResult.innerHTML = 'Won';
				comResult.innerHTML = 'Loss';
				userCount++;
			}

			if (userCount == total) {
				document.querySelector('.won').classList.toggle('flex');
				document.querySelector('.won').classList.toggle('hidden');
			}
			if (comCount == total) {
				document.querySelector('.loss').classList.toggle('flex');
				document.querySelector('.loss').classList.toggle('hidden');
			}
		})

	})

})