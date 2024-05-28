import React from "react";
import "./Cell.css";

interface Props {
    hasItem: boolean;
    clicked: boolean;
    onCellClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({hasItem, clicked, onCellClick}) => {
    return (
        <div onClick={onCellClick} className={`Cell ${clicked ? 'clicked' : ''}`}>
            {hasItem && clicked ? ')(' : null}
        </div>
    );
};

export default Cell;