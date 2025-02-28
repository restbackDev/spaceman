# Spaceman Game

## Overview
Spaceman is an engaging "Guess the Word" game where players are challenged to guess a hidden word based on a selected category. The game operates similarly to Hangman, but with a fun twist. Players select a category and then try to guess the word by pressing buttons representing letters. Each wrong guess adds another part to the spaceman figure, and players must avoid completing the spaceman to win the game.

## Features
- **Category Selection**: Players can choose from different categories of words.
- **Letter Buttons**: Players can guess the word by selecting letter buttons.
- **Spaceman Figure**: The game uses a visual representation of a spaceman figure to track wrong guesses.
- **Word Guessing**: Players must guess the word correctly before the spaceman is fully drawn.
- **Simple and Fun Gameplay**: Intuitive mechanics suitable for all ages.

## Game Flow
1. **Choose Category**: The game offers multiple categories to choose from. Once a category is selected, a random word from that category is chosen.
2. **Guess the Word**: The word is hidden, and the player will see an underscore for each letter in the word.
3. **Press Letter Buttons**: Players will guess letters by pressing the corresponding letter buttons.
4. **Wrong Guess**: Each wrong guess will add a part to the spaceman figure.
5. **Winning or Losing**: The player wins if they can guess the word before the spaceman is fully drawn. If the spaceman is fully drawn, the player loses.

## Installation

To play or contribute to the Spaceman game, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (for running the game locally)
- [Git](https://git-scm.com/) (to clone the repository)

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/restbackDev/spaceman.git
    ```
2. Navigate to the project directory:
    ```bash
    cd spaceman
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Run the game:
    ```bash
    npm start
    ```

The game should now be running on your local machine. Open your browser and navigate to `http://localhost:3000` to play!

## Game Rules

- **Categories**: Players can choose a category before starting. Some examples might include animals, countries, or famous movies.
- **Guessing the Word**: The player will see the number of letters in the word represented as underscores (e.g., `_ _ _ _ _`).
- **Correct Guesses**: If a player guesses a correct letter, it will fill in the corresponding blank spaces in the word.
- **Incorrect Guesses**: If a player guesses a wrong letter, a part of the spaceman figure is drawn. There is a limited number of incorrect guesses before the spaceman is fully drawn.
- **Spaceman Figure**: The spaceman figure consists of several parts that are progressively added after each incorrect guess. The game ends when the figure is fully drawn (i.e., the player loses), or the word is guessed correctly (i.e., the player wins).

## Contributing

We welcome contributions to improve the game! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Describe your changes"
    ```
4. Push to your fork:
    ```bash
    git push origin feature/your-feature
    ```
5. Submit a pull request with a description of your changes.

## Technologies Used
- **JavaScript** (ES6+)
- **HTML5** and **CSS3** for the game interface
- **Node.js** (for local development and server)
- **React** (optional, if the project uses React for UI, add this here)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The inspiration for this game comes from the classic "Hangman" game.
- Special thanks to the contributors who have improved the project.

## Contact

If you have any questions or suggestions, feel free to reach out to the project maintainers via the [Issues](https://github.com/restbackDev/spaceman/issues) page or contact us directly.