import React, { useState } from 'react';
import Dice from './Dice';
import './App.css'; // Импортируем CSS файл для стилизации

const App = () => {
    const [diceValue, setDiceValue] = useState(1);

    const rollDice = () => {
        const newValue = Math.floor(Math.random() * 6) + 1; // Генерируем случайное число от 1 до 6
        setDiceValue(newValue);
    };

    return (
        <div className="app">
            <h1>ИГРАЛЬНАЯ КОСТЬ</h1>
            <Dice value={diceValue} />
            <button onClick={rollDice}>БРОСИТЬ КУБИК</button>
        </div>
    );
};

export default App;
