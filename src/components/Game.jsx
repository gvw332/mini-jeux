import React, { useState } from 'react';

const Game = () => {
    const [guess, setGuess] = useState('');
    const [numberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const guessedNumber = parseInt(guess);
        if (guessedNumber === numberToGuess) {
            setMessage('Bravo! Vous avez deviné le nombre.');
        } else if (guessedNumber < numberToGuess) {
            setMessage('Trop bas. Essayez encore.');
        } else {
            setMessage('Trop haut. Essayez encore.');
        }
        setGuess(''); // Réinitialiser le champ de saisie
    };

    return (
        <div className="devinette">
            <p>Devinez le nombre entre 1 et 100</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    value={guess} 
                    onChange={(e) => setGuess(e.target.value)} 
                />
                <button type="submit">Deviner</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Game;