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
    $("td").click(function() {
      $(this).toggleClass("active")
    })
  }

  componentDidMount =() => {
    const randomClass = ['game-cubes active', 'game-cubes'];
    $("td").each(function() {
      let index = Math.floor(Math.random() * randomClass.length);
      $(this).addClass(randomClass[index]);
    })
  }

  restartGame = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <>
      <div className="header">
        <h1 id="title">Lights Out</h1>
        <div className="sub-header">
          <button onClick={this.restartGame}>Restart</button>
          <p id="timer">Timer:</p>
        </div>
      </div>
      <div className="game-container">
        <table>
          <thead>
            <tr>
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
        <thead>
            <tr>
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
              <td onClick={this.toggleButton} />
            </tr>
          </thead>
        </table>
      </div>
      </>
    )
  }
}
