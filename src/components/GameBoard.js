import React from 'react';
import '../GameBoard.css';
import StopWatch from './StopWatch';
import Grid from './Grid';
import Success from './Success';
import _ from 'lodash';

const indices = [0, 1, 2, 3, 4];

export default class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      gridSize: 5,
      data: this.randomizeGameBoard(5),
      moves: 0
    }
  }

  restartGame = () => {
    window.location.reload();
  }

  createGameBoard = (gridSize, toggle) => {
    const board = [];
    _.forEach(indices, (row) => { board.push([]);
      _.forEach(indices, (column) => board[row].push(toggle(board, row, column)));
    });
    return board;
  }

  randomizeGameBoard = (gridSize) => {
    return this.createGameBoard(gridSize, () => Math.random() > 0.5);
  }

  targetAdjacentTile = (r1, c1, r2, c2) => {
    const r = Math.abs(r1 - r2);
    const c = Math.abs(c1 - c2);
    return (
      (r == 0 && c == 0) || (r == 1 && c == 0) || (r == 0 && c == 1)
    )
  }

  toggleLight = (row, column) => {
    let playerWins = true;
    const { data, moves, gridSize } = this.state;
    const targetRC = this.createGameBoard(gridSize, (board, r, c) => {
      const toggle = data[r][c] != this.targetAdjacentTile(row, column, r, c);
      if (toggle) { playerWins = false }
      return toggle;
    });
    playerWins ? this.setState({ success: true }) : this.setState({ data: targetRC, moves: moves + 1 });
  }

  render() {
    const gameCubes = [];
    const { data, moves } = this.state;

    _.forEach(indices, (row) => {
      gameCubes.push(
        <Grid
          lights={ data[row] }
          row={ row }
          click={ this.toggleLight } 
        />
      );
    });

    return (
      <>
        <div className="header">
          <h1 className="title">Lights Out</h1>
          { this.state.success ? <Success /> : "" }
          <div className="game-options">
            <button className="restart" onClick={ this.restartGame }>
              { this.state.success ? 'New Game' : 'Restart' }
            </button>
            <StopWatch />
            <p className="moves">Moves: { moves }</p>
          </div>
        </div>
        <div>
          { gameCubes }
        </div>
      </>
    );
  }
};
