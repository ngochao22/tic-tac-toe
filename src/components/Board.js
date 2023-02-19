import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
    return (
        <div className="container">
            <div className="game-board">
                {cells.map((item, index) => (
                    <Cell
                        key={index}
                        value={item}
                        onClick={() => onClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
