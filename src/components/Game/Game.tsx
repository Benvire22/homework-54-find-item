import { useState } from 'react';
import MyButton from './MyButton/MyButton';
import Counter from './Counter/Counter';
import CellBoard from './CellBoard/CellBoard';
import './Game.css';

interface ICell {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = () => {
  const cells: ICell[] = [];
  const randomCell = Math.floor(Math.random() * 36);

  for (let i = 0; i < 36; i++) {
    const cell: ICell = {
      hasItem: false,
      clicked: false,
    };

    cells.push(cell);
  }
  cells[randomCell].hasItem = true;

  return cells;
};

const Game = () => {
  const [cells, setCells] = useState<ICell[]>(createItems());
  const [counter, setCounter] = useState<number>(0);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const onCellClick = (index: number) => {
    const cell = cells[index];

    if (!cell.clicked) {
      setCells(prevState => {
        const copyCells = [...prevState];
        copyCells[index] = {...copyCells[index], clicked: true};

        return copyCells;
      });

      if (cell.hasItem) {
        setShowOverlay(prevState => !prevState);
      }

      setCounter((prevState) => prevState + 1);
    }
  };

  const resetGame = () => {
    if (counter > 0) {
      setCells(createItems());
      setCounter(0);
      setShowOverlay(false);
    }
  };

  return (
    <div className="Game">
      <CellBoard cells={cells} onCellClick={onCellClick} overlay={showOverlay}/>
      <Counter count={counter}/>
      <MyButton onButtonCLick={resetGame}>Reset</MyButton>
    </div>
  );
};

export default Game;