document.addEventListener("DOMContentLoaded", function () {
    const player1Img = document.getElementById("player1");
    const player2Img = document.getElementById("player2");
    const resultText = document.getElementById("result");

    function playGame() {
        const random1 = getRandomNumber(1, 3);
        const random2 = getRandomNumber(1, 3);

        // Update the images
        player1Img.setAttribute("src", getImagePath(random1));
        player2Img.setAttribute("src", getImagePath(random2));

        // Determine the winner and update the text
        const winner = determineWinner(random1, random2);
        resultText.textContent = getWinnerText(winner);
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getImagePath(number) {
        switch (number) {
            case 1:
                return "images/rock.jpeg";
            case 2:
                return "images/scissors.jpeg";
            case 3:
                return "images/paper.jpeg";
            default:
                return "";
        }
    }

    function determineWinner(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            return 0; // It's a tie
        } else if (
            (player1Choice === 1 && player2Choice === 3) ||
            (player1Choice === 2 && player2Choice === 1) ||
            (player1Choice === 3 && player2Choice === 2)
        ) {
            return 1; // Player 1 wins
        } else {
            return 2; // Player 2 wins
        }
    }

    function getWinnerText(winner) {
        switch (winner) {
            case 0:
                return "It's a tie!";
            case 1:
                return "Player 1 wins!";
            case 2:
                return "Player 2 wins!";
            default:
                return "";
        }
    }
});
