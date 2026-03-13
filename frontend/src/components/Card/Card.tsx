import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Card(){
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`card ${flipped ? "flipped" :  ""}`} onClick={() => setFlipped(!flipped)}>
            <div className='front'>
                <div className='placeholder'>
                    <FontAwesomeIcon icon={faQuestion} size='3x'/>
                </div>
            </div>
            <div className='back'>
                🐶
            </div>
        </div>
    )
}



export default Card