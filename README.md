# 🌌 Stellar Word Quest 🚀

**A 90s-style space-themed Hangman game built with JavaScript, DOM manipulation, and event-driven programming. Test your cosmic vocabulary and guess space-related words before your guesses run out!**

[🎮 **Live Demo**](#) – _(Replace with actual link)_

---

## 📌 Overview

**Stellar Word Quest** is an interactive browser-based word-guessing game inspired by classic **Hangman** but set in the cosmos.  
Players guess **letters from A-Z** to reveal space-related words before running out of attempts to save your planet before it explodes.

The game includes:  
✔ **Dynamic UI updates** with DOM manipulation.  
✔ **Keyboard & on-screen button support** for accessibility.  
✔ **Real-time game music and sound effects** for immersion.  
✔ **Win/Loss state handling** with animations.  
✔ **Randomized space-themed words for replayability.**

---

## 🚀 **Live Demo**

Try the game here: **[Play Now](#)** _(https://smart79.github.io/Word-Guess-Game/)_

## 🎮 Game Flow

1️⃣ Game Initialization

    A random word is chosen from a predefined array.
    The game resets all variables (e.g., guessed letters, remaining attempts).
    The display updates dynamically to show blanks for unguessed letters.

2️⃣ Letter Guessing Logic

    User input (keyboard or button click) triggers a function.
    If the letter is in the word, it updates the display.
    If incorrect, the remaining attempts decrease, and the hangman image updates.

3️⃣ Win/Loss Conditions

    Win Condition: If all letters are guessed correctly, the win screen displays and you land on your new planet to see where it is in evolution.
    Lose Condition: If attempts reach zero, the lose screen displays and your world explodes.
    Game Music Handling: Music stops on win/loss, and sound effects play.

---

## 🛠 **Project Structure**

Stellar-Word-Quest/
│── assets/
│ ├── images/ # Game images & backgrounds
│ ├── sounds/ # Audio files (game music, win/loss sounds)
│── css/
| │ ├── style.css # Styling for game elements
│── js/
│ ├── game.js # Core game logic
│── index.html # Main game structure
│── README.md # Project documentation

---

## 💾 **Installation**

To run the game locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YourUsername/Stellar-Word-Quest.git
   cd Stellar-Word-Quest

    Open index.html in a browser (Chrome recommended for best experience)
   ```

## 🧑‍💻 Technologies Used

    JavaScript (ES6+) – Handles game logic, event listeners, DOM updates.
    HTML5 – Structure for game elements and UI.
    CSS3 – Styling and layout.
    Bootstrap – For responsive design.
    Audio API – For game sounds and music.

## 🎯 Skills Demonstrated

JavaScript DOM Manipulation – Dynamically updates the UI when letters are guessed.
Event Handling – Listens for keyboard and on-screen button clicks.
State Management – Tracks game progress, wins/losses, and user input.
CSS Styling & UI Design – Enhances readability and aesthetics.
Audio Integration – Background music, win/loss sounds.

## ✨ Features & Functionality

✔ Random Word Selection – Words are chosen dynamically from an array.
✔ Letter Validation – Only A-Z keys work, preventing invalid inputs.
✔ On-Screen Keyboard – Play without a physical keyboard.
✔ Sound Effects – Immersive win/loss music and game music.
✔ Game Reset on Win/Loss – Keeps game play fluid.
✔ Win & Lose Screens – Visual feedback on success or failure.

## 🔮 Future Enhancements

🚀 More Word Categories – Planets, stars, astronauts, galaxies, etc.
🎵 Music Toggle – Allow users to mute/unmute background music.
🔠 Difficulty Modes – Easy, Normal, Hard settings with different word lengths.
🖥 Mobile Optimization – Improve UI responsiveness for smaller screens.

## 🤝 Contributors

👨‍💻 Stephen Martinez – Full Development, Design, and Documentation

Want to contribute? Feel free to fork the repo and submit a pull request!
📜 Credits & Acknowledgments

    NASA Space Dictionary – Inspired word choices.
    Bootstrap – Styling assistance.
    MDN Web Docs – JavaScript and DOM manipulation reference.

## 📜 License

This project is licensed under the MIT License.
🌎 More Projects & Contact

💻 More projects: GitHub Portfolio (https://stephenmartinez.dev/portfolio.html)
📬 Contact Me: Portfolio Contact Page (https://stephenmartinez.dev/contact.html)

---
