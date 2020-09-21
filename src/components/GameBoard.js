import React from 'react';
import '../GameBoard.css';

export default class GameBoard extends React.Component {
  render() {
    return (
      <>
      <div className="header">
        <h1 id="title">Lights Out</h1>
        <div className="sub-header">
          <button>Start</button>
          <p id="timer">Timer:</p>
        </div>
      </div>
      <div className="game-container">
        <table>
          <tr>
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
          </tr>
        </table>
        <table>
          <tr>
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
          </tr>
        </table>
        <table>
          <tr>
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
          </tr>
        </table>
        <table>
          <tr>
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
          </tr>
        </table>
        <table>
          <tr>
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
            <td className="game-cubes" />
          </tr>
        </table>
      </div>
      </>
    )
  }
}
