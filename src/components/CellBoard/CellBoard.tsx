import "./CellBoard.css";
import {useState} from "react";
import Cell from "../Cell/Cell";

interface ICell {
    hasItem: boolean;
    clicked: boolean;
}

const createItems = () => {
    const cells: ICell[] = [];

    for (let i = 0; i < 36; i++) {
        const cell: ICell = {
            hasItem: false,
            clicked: false,
        };

        cells.push(cell);
    }
    const randomCell = Math.floor(Math.random() * cells.length);

    cells[randomCell].hasItem = true;

    return cells;
};

const CellBoard = () => {
    const [sells, setSells] = useState<ICell[]>(createItems());
    const [counter, setCounter] = useState(0);


    const onCellClick = (index: number) => {
        setSells(prevState => {
          const copyCells = [...prevState];

          if (!copyCells[index].clicked) {
              copyCells[index].clicked = true;
              setCounter((prevState) => prevState + 1);
          }

          return copyCells;
      });
    };

    const resetGame = () => {
        setSells(createItems());
        setCounter(0);
    };

    return (
        <div className="CellBoard">
            {sells.map(({hasItem, clicked}, i) => {
                return <Cell hasItem={hasItem} clicked={clicked} onCellClick={() => onCellClick(i)} key={i}/>;
            })}
            <h2>Tries: {counter}</h2>
            <button onClick={resetGame}>Reset</button>
        </div>
    );
};

export default CellBoard;