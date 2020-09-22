import React from 'react';


const transformToSeconds = (sec) => {
  return Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2)
}
export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }
    this.incrementer = null;
  }

  componentDidMount() {
    this.incrementer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 })
    }, 1000)
  }

  render() {
    return (
      <div>
        <p id="timer">{transformToSeconds(this.state.seconds)}</p>
      </div>
    )
  }
}
