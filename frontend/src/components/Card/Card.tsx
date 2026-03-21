import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
    flipped: boolean;
    face: string;
    onClick: () => void;
}

function Card({ flipped, face, onClick}: CardProps){
    return (
        <div className={`card ${flipped ? "flipped" :  ""}`} onClick={onClick}>
            <div className='front'>
                <div className='placeholder'>
                    <FontAwesomeIcon icon={faQuestion} size='3x'/>
                </div>
            </div>
            <div className='back'>
                {face}
            </div>
        </div>
    )
}



export default Card