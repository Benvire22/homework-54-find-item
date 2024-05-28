import React from 'react';
import './Overlay.css';

interface Props {
  showOverlay: boolean;
}

const Overlay: React.FC<Props> = ({showOverlay}) => {
  const overlayClasses = ['Overlay'];

  if (showOverlay) {
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
