// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
		const speakButton = document.querySelector('#speakButton');
		const subjectButton = document.querySelector('#subjectButton');
		const verbButton = document.querySelector('#verbButton');
		const adjectiveButton = document.querySelector('#adjectiveButton');
		const objectButton = document.querySelector('#objectButton');
		const placeButton = document.querySelector('#placeButton');
		const generateButton = document.querySelector('#generateButton');
		const resetButton = document.querySelector('#resetButton');
		const storyOutput = document.querySelector('.story-output');
		let textToSpeak = '';
		// Array of words for each category
		const subjects = ['The turkey', 'Mom', 'Dad', 'My teacher', 'The Elephant','The cat'];
		const verbs = ['sat on', 'ate ', 'danced with', 'saw', 'doesnot like','kissed'];
		const adjectives = ['a funny ', 'a scary', 'a goofy', 'a slimy', 'a barking','fat'];
		const objects = ['goat', 'monkey', 'fish', 'cow', 'bug','worm'];
		const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass ','in my shoes'];
		// Utility function to get a random word from an array
		function getRandomWord(arr) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			return arr[randomIndex];
		}
		// Function to generate a random story
		function generateStory() {
			const subject = getRandomWord(subjects);
			const verb = getRandomWord(verbs);
			const adjective = getRandomWord(adjectives);
			const object = getRandomWord(objects);
			const place = getRandomWord(places);

			textToSpeak = `${subject} ${verb} ${adjective} ${object} ${place}`;
			storyOutput.textContent = textToSpeak;
		}
		// Function to generate a random story
		function resetStory() {
			textToSpeak = '';
			storyOutput.textContent = '';
		}
		// Event listeners for buttons
		subjectButton.addEventListener('click', function() {
			textToSpeak += getRandomWord(subjects) + ' ';
		});

		verbButton.addEventListener('click', function() {
			textToSpeak += getRandomWord(verbs) + ' ';
		});

		adjectiveButton.addEventListener('click', function() {
			textToSpeak += getRandomWord(adjectives) + ' ';
		});

		objectButton.addEventListener('click', function() {
			textToSpeak += getRandomWord(objects) + ' ';
		});

		placeButton.addEventListener('click', function() {
			textToSpeak += getRandomWord(places) + ' ';
		});

		generateButton.addEventListener('click', generateStory);

		resetButton.addEventListener('click', resetStory);

		speakButton.addEventListener('click', function() {
			speakNow(textToSpeak);
		});
		// Function to speak the value of textToSpeak
		function speakNow(text) {
			if ('speechSynthesis' in window) {
				const msg = new SpeechSynthesisUtterance();
				msg.text = text;
				window.speechSynthesis.speak(msg);
			} else {
				alert('Sorry, speech synthesis is not supported in your browser.');
			}
		}
