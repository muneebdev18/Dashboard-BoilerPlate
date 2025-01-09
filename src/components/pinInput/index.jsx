import React, { memo } from 'react';

import PinInput from './PinInput';
import './style.css';

const Pin = ({ setPinValue, pinValue }) => {
    const handlePinComplete = (pin) => {
        setPinValue(pin)
    }

    return (
        <div className="pin_main">
            <PinInput pinValue={pinValue} setPinValue={setPinValue} length={6} onComplete={handlePinComplete} />
        </div>
    )
}

export default memo(Pin);