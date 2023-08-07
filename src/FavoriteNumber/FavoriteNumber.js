import React from 'react';
import './FavoriteNumber.css';

function FavoriteNumber() {
    return (
        <div className="FavoriteNumber">
            <p>Clicking on one of the following buttons, should write it's number in the blue box below.</p>
            <div className="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className="chosenNumber">
                { /*THE CHOSEN NUMBER SHOULD BE WRITTEN HERE*/ }
            </div>
        </div>
    );
}

export default FavoriteNumber;