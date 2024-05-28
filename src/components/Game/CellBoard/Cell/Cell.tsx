import React from 'react';
import './Cell.css';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  onCellClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({hasItem, clicked, onCellClick}) => {
  const cellClasses = ['Cell'];

  if (clicked) {
    cellClasses.push('clicked');
  }

  return (
    <div className={cellClasses.join(' ')} onClick={onCellClick}>
      {hasItem && clicked ? '0)(0' : null}
    </div>
  );
};

export default Cell;