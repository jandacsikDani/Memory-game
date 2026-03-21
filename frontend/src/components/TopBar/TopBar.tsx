import './TopBar.css';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Modal from '../Modals/Modal';
import SettingsModalContent from '../Modals/views/SettingsModalContent/SettingsModalContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRepeat } from '@fortawesome/free-solid-svg-icons';


function TopBar({ onModalSubmit, onReset, matches, mistakes }: {
    onModalSubmit: (data: {pairs: number; seconds: number}) => void;
    onReset: () => void;
    matches: number;
    mistakes: number;
}){
    const [showSettings, setShowSettings] = useState(true);

    function handleModalSubmit(data: {pairs: number; seconds: number}){
        onModalSubmit(data);
        setShowSettings(false);
    }

    return(<>
        <div className='container'>
            <Logo></Logo>
            <div className='timer'>
                <div>60</div>
                <div>
                    <div>{matches !== 0 ? `${matches} matches` : "0 matches"}</div>
                    <div>{mistakes !== 0 ? `${mistakes} mistakes`: "0 mistakes"}</div>
                </div>
            </div>
            <div className="settings">
                <div><FontAwesomeIcon icon={faGear} size='2x' onClick={() => setShowSettings(true)}/></div>
                <div><FontAwesomeIcon icon={faRepeat} size='2x' onClick={() => onReset()}/></div>
            </div>
        </div>

        {showSettings && (
            <Modal onClose={() => setShowSettings(false)}>
                <SettingsModalContent onClose={handleModalSubmit}></SettingsModalContent>
            </Modal>
        )}
    </>)
}

export default TopBar