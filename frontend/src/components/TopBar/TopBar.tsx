import './TopBar.css';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Modal from '../Modals/Modal';
import SettingsModalContent from '../Modals/views/SettingsModalContent/SettingsModalContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRepeat } from '@fortawesome/free-solid-svg-icons';


function TopBar(){
    const [showSettings, setShowSettings] = useState(false);

    return(<>
        <div className='container'>
            <Logo></Logo>
            <div className='timer'>
                <div>60</div>
                <div>
                    <div>9 matches</div>
                    <div>3 mistakes</div>
                </div>
            </div>
            <div className="settings">
                <div><FontAwesomeIcon icon={faGear} size='2x' onClick={() => setShowSettings(true)}/></div>
                <div><FontAwesomeIcon icon={faRepeat} size='2x'/></div>
            </div>
        </div>

        {showSettings && (
            <Modal onClose={() => setShowSettings(false)}>
                <SettingsModalContent onClose={() => setShowSettings(false)}></SettingsModalContent>
            </Modal>
        )}
    </>)
}

export default TopBar