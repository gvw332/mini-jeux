import React, { useState } from 'react';

const choices = ['pierre', 'papier', 'ciseaux'];

const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const handleClick = (choice) => {
        setUserChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
        determineWinner(choice, randomChoice);
    };

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            setResult('Égalité!');
        } else if (
            (userChoice === 'pierre' && computerChoice === 'ciseaux') ||
            (userChoice === 'papier' && computerChoice === 'pierre') ||
            (userChoice === 'ciseaux' && computerChoice === 'papier')
        ) {
            setResult('Vous gagnez!');
        } else {
            setResult('L\'ordinateur gagne!');
        }
    };

    return (
        <div className='rockpaperscissors'>
            <button onClick={() => handleClick('pierre')}>Pierre</button>
            <button onClick={() => handleClick('papier')}>Papier</button>
            <button onClick={() => handleClick('ciseaux')}>Ciseaux</button>
            <p>Votre choix: {userChoice}</p>
            <p>Choix de l'ordinateur: {computerChoice}</p>
            <p>Résultat: {result}</p>
        </div>
    );
};

export default RockPaperScissors;