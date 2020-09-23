import React from 'react';

function Light(props){
  const clicked = () => {
    const { click, row, column } = props;
    click(row, column);
  }
  let classNames="game-cubes ";
  classNames += (props.toggle) ? "active" : "";

  return <span className={ classNames } onClick={ clicked } />
}

export default Light;
