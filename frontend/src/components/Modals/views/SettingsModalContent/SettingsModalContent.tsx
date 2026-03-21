import './SettingsModalContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function SettingsModalContent({ onClose }: {
    onClose: (data: {pairs: number; seconds: number}) => void
}){
    const [pair, setPair] = useState(12);
    const [seconds, setSeconds] = useState(60);

    function handleSubmit(){
        onClose({pairs: pair, seconds: seconds});
    }

    return(<>
        <div className='title'>
            <div>Game settings</div>
            <div><FontAwesomeIcon icon={faX} onClick={handleSubmit}/></div>
        </div>
        <div className='content'>
            <div>
                <div>Number of pair of cards</div>
                <div><input type="number" name="" id="" min={1} max={99} value={pair} onChange={(e) => setPair(Number(e.target.value))}/></div>
            </div>
            <div>
                <div>Countdown time (sec.)</div>
                <div><input type="number" name="" id=""  min={1} max={99} value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}/></div>
            </div>
            <button id='saveButton' onClick={handleSubmit}>SAVE SETTINGS</button>
        </div>
    </>);
}

export default SettingsModalContent