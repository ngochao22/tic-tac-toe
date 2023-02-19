import React, { useState } from "react";
import Board from "./Board";
import "../App.css";
import { calcWinner } from "../helper";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calcWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;

        boardCopy[index] = xIsNext ? "X" : "O";

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
    };
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <div className="game-title">
                {winner ? `Winner is ${!xIsNext ? "X" : "O"}` : ""}
            </div>
            <button className="game-reset" onClick={handleResetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default Game;
