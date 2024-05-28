import './CellBoard.css';
import React from 'react';
import Cell from './Cell/Cell';
import Overlay from './Overlay/Overlay';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
}

interface Props {
  cells: ICell[];
  onCellClick: (i: number) => void;
  overlay: boolean;
}

const CellBoard: React.FC<Props> = ({cells, onCellClick, overlay}) => {
  return (
    <div className="CellBoard">
      {cells.map(({hasItem, clicked}, i) => (
        <Cell hasItem={hasItem} clicked={clicked} onCellClick={() => onCellClick(i)} key={i}/>
      ))}
      <Overlay showOverlay={overlay}/>
    </div>
  );
};

export default CellBoard;