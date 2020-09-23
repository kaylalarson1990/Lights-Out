import React from 'react';
import '../GameBoard.css';
import StopWatch from './StopWatch';
import Grid from './Grid';
import _ from 'lodash';

const indices = [0, 1, 2, 3, 4];

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: 5, data: this.randomizeGameBoard(5), moves: 0 }
  }

  restartGame = () => {
    window.location.reload(false);
  }

  createGameBoard = (size, toggle) => {
    const board = [];
    _.forEach(indices, (row) => {
      board.push([]);
      _.forEach(indices, (column) => board[row].push(toggle(board, row, column)))
    });
    return board;
  }

  randomizeGameBoard = (size) => {
    return this.createGameBoard(size, () => Math.random() > 0.5);
  }

  targetAdjacent = (row1, column1, row2, column2) => {
    const rows = Math.abs(row1 - row2);
    const columns = Math.abs(column1 - column2);
    return (
      (rows == 0 && columns == 0) || (rows == 1 && columns == 0) || (rows == 0 && columns == 1)
    )
  }

  toggleLight = (row, column) => {
    const { data, moves } = this.state;
    const newData = this.createGameBoard(this.state.size, (board, r, c) => {
      return data[r][c] ^ this.targetAdjacent(row, column, r, c);
    });
    this.setState({ data: newData, moves: moves + 1 });
  }

  render() {
    const gameCubes = [];
    const { data, moves } = this.state;

    _.forEach(indices, (row) => {
      gameCubes.push(<Grid lights={ data[row] } row={ row } click={ this.toggleLight } />);
    });

    return (
      <div>
        <div className="header">
          <h1 className="title">Lights Out</h1>
          <div className="game-options">
            <button className="restart" onClick={ this.restartGame }>Restart</button>
            <StopWatch />
            <p className="moves">Moves: { moves }</p>
          </div>
        </div>
        <div>
          { gameCubes }
        </div>
      </div>
    );
  }
};
