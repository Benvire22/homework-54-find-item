import React from 'react';
import './Overlay.css';

interface Props {
  overlay: boolean;
}

const Overlay: React.FC<Props> = ({overlay}) => {
  const overlayClasses = ['Overlay'];

  if (overlay) {
    overlayClasses.push('show');
  }

  return (
    <div>
      <div className={overlayClasses.join(' ')}>
        <h1 className="overlay-message">You find item!</h1>
      </div>
    </div>
  );
};

export default Overlay;
