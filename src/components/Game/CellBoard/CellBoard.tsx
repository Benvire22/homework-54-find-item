import "./CellBoard.css";
import React from "react";
import Cell from "./Cell/Cell";

interface ICell {
    hasItem: boolean;
    clicked: boolean;
}

interface Props {
    cells: ICell[];
    onCellClick: (i: number) => void;
}

const CellBoard: React.FC<Props> = ({cells, onCellClick}) => {
    return (
        <div className="CellBoard">
            {cells.map(({hasItem, clicked}, i) => (
                <Cell hasItem={hasItem} clicked={clicked} onCellClick={() => onCellClick(i)} key={i}/>
            ))}
        </div>
    );
};

export default CellBoard;