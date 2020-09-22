import React from 'react';
import '../GameBoard.css';
import StopWatch from './StopWatch';
import $ from 'jquery';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, counter: 0 }
  }

  toggleButton = () => {
    this.setState({
        active: !this.state.active, 
        counter: this.state.counter + 1
   });
    $("td").click(function(e) {
      $(this).next().addBack().toggleClass("active")
      $(this).prev().toggleClass("active")
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
        <div className="game-options">
          <button onClick={this.restartGame}>Restart</button>
          <StopWatch />
          <p id="moves">Moves: {this.state.counter}</p>
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
