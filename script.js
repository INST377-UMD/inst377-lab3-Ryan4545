/**
    Author: Ryan Bode
    Date: 2025-09-21
    Class: INST377
    Description: This is a simple Rock Paper Scissors game.
*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gameForm');
    const nameInput = document.getElementById('playerName');
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page from refreshing
        
        const playerName = nameInput.value.trim();
        const playerChoice = document.getElementById('playerChoice').value;
        
        if (!playerName) {
            alert('Please enter your name!'); // Alert if no name is entered
            return;
        }
        
        // Simple game logic
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        let result = '';
        if (playerChoice === computerChoice) { // If the player and computer choose the same thing, it's a tie
            result = "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') || // If the player chooses rock and the computer chooses scissors, the player wins
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') // If the player chooses scissors and the computer chooses paper, the player wins
        ) {
            result = `Congratulations ${playerName}! You win!`;
        } else { // If the player doesn't win, they lose
            result = `Sorry ${playerName}, you lose! Computer chose ${computerChoice}.`;
        }
        
        alert(result);
    });
    
    // Additional focus effects for better UX
    nameInput.addEventListener('focus', function() {
        this.style.border = '2px solid #3498db';
    });
    
    nameInput.addEventListener('blur', function() {
        this.style.border = 'none';
    });
});
