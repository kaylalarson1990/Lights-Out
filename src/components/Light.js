import React from 'react';

function Light(props){
  const lightSwitch = () => {
    const { click, row, column } = props;
    click(row, column);
  }
  let classNames="game-cubes ";
  classNames += (props.toggle) ? "active" : "";

  return <span className={ classNames } onClick={ lightSwitch } />
}

export default Light;
