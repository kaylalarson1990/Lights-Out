import React from 'react';
import Light from './Light';
import _ from 'lodash';

function Grid(props) {
  const gameCubes = [];
  const indices = [0, 1, 2, 3, 4];
  const { lights, row, click } = props;

  _.forEach(indices, (column) => {
    gameCubes.push(<Light
      toggle={ lights[column] }
      row={ row }
      column={ column }
      click={ click } />)
  });

  return <div className="game-container">{ gameCubes }</div>
}

export default Grid;
