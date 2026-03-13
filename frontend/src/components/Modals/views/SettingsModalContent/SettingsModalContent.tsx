import './SettingsModalContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

type ModalProp = {
    onClose: () => void
};

function SettingsModalContent({ onClose }: ModalProp){
    return(<>
        <div className='title'>
            <div>Game settings</div>
            <div><FontAwesomeIcon icon={faX} onClick={onClose}/></div>
        </div>
        <div className='content'>
            <div>
                <div>Number of pair of cards</div>
                <div><input type="number" name="" id="" min={1} max={99} value={12} /></div>
            </div>
            <div>
                <div>Countdown time (sec.)</div>
                <div><input type="number" name="" id=""  min={1} max={99} value={60}/></div>
            </div>
            <button id='saveButton'>SAVE SETTINGS</button>
        </div>
    </>);
}

export default SettingsModalContent