import React from 'react';

const transformToSeconds = (second) => {
  return Math.floor(second / 60) + ':' + ('0' + second % 60).slice(-2)
}
export default class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0
    }
  }

  componentDidMount() {
    this.incrementer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 })
    }, 1000)
  }

  render() {
    return (
      <div>
        <p className="timer">Time: {transformToSeconds(this.state.seconds)}</p>
      </div>
    )
  }
}
