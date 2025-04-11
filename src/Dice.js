import React from 'react';

const Dice = ({ value }) => {
    return (
        <div>
            <img src={`/dice${value}.png`} alt={`Dice showing ${value}`} />
            <p>
                Изображения кубиков взяты из{' '}
                <a href="https://www.flaticon.com/free-icons/dice" title="dice icons" target="_blank" rel="noopener noreferrer">
                    Dice icons created by rizal2109 - Flaticon
                </a>
            </p>
        </div>
    );
};

export default Dice;