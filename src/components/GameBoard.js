import React from 'react';
import '../GameBoard.css';
import $ from 'jquery';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  toggleButton = () => {
    this.setState({ active: !this.state.active })
    $("td.game-cubes").click(function() {
      $(this).toggleClass("active")
    })
  }

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
          <thead>
            <tr>
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
        <thead>
            <tr>
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
              <td className="game-cubes" onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
      </div>
      </>
    )
  }
}
