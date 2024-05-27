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
    const [items, setItems] = useState<ICell[]>(createItems());
    const [counter, setCounter] = useState(0);


    const onCellClick = (index: number) => {
      setItems(prevState => {
          const copyCells = [...prevState];

          if (!copyCells[index].clicked) {
              copyCells[index].clicked = true;
              setCounter((prevState) => prevState + 1);
          }

          return copyCells;
      });
    };

    return (
        <div className="CellBoard">
            {items.map(({hasItem, clicked}, i) => {
                return <Cell hasItem={hasItem} clicked={clicked} onCellClick={() => onCellClick(i)}/>;
            })}
            <h2>Tries: {counter}</h2>
        </div>
    );
};

export default CellBoard;