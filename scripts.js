//Event listener to make sure the body is loaded
document.addEventListener("DOMContentLoaded", () => {
	// Get ahold of the button
	const button = document.getElementById("button");
	const rollButton = document.getElementById("roll-button");

	//Make the holder for all the squares
	let container = document.createElement("div");
	//Add styling for the container
	container.classList.add("dice-container");
	//Add the container to the page if it's the first time
	document.body.appendChild(container);

	//Add an event listener to the button
	rollButton.addEventListener("click", () => {
		for (let die of dice) {
			die.roll();
		}
	});

	//Give the button an onclick
	button.addEventListener("click", () => {
		new Die();
	});

	//Class for the dice
	class Die {
		constructor() {
			console.log(`Die made`);
			this.value = Math.floor(Math.random() * 6);
			console.log(`this.value`, this.value);
			this.div = document.createElement("div");
			this.div.className = "die";
			this.div.id = this.value;
			this.div.innerHTML = this.value;
			container.appendChild(this.div);
		}
		roll() {
			console.log(`Dice rolled`);
			this.value = Math.floor(Math.random() * 6);
			this.div.innerHTML = this.value;
		}
	}
});
