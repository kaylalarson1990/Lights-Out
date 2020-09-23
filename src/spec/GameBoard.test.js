import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';
import Grid from '../components/Grid';
import Light from '../components/Light';

test('renders Lights Out title', () => {
  const { getByText } = render(<GameBoard />);
  const linkElement = getByText(/Lights Out/i);
  expect(linkElement).toBeInTheDocument();
});

const title = "Lights Out";
const button = "Restart";
const lights = [false, true, false, true, true];
const row = 1;
const column = 2;
const gameBoardWrapper = shallow(<GameBoard>{title}</GameBoard>);
const lightWrapper = shallow(<Light toggle={lights[row]} row={row} column={column} click={jest.fn}/>);
const gridWrapper = shallow(<Grid lights={lights[row]} row={row} click={jest.fn} />);

describe('GameBoard', () => {
  it('renders the GameBoards children', () => {
    expect(gameBoardWrapper.find('h1').text()).toEqual(title);
    expect(gameBoardWrapper.find('.restart').text()).toEqual(button);
  });
});

describe('Light', () => {
  it('toggles class active on click', () => {
    const gridCube = lightWrapper.find('span').first().simulate('click');
    expect(gridCube.hasClass('active')).toEqual(true);
  });
});

describe('Grid', () => {
  it('renders the game container', () => {
    expect(gridWrapper.hasClass('game-container')).toEqual(true);
  })
})

describe('reloads page on game restart', () => {
  const { reload } = window.location;
  const reloadFn = () => {
    window.location.reload(true);
  }
  beforeAll(() => {
    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });
    window.location.reload = jest.fn();
  });

  afterAll(() => {
    window.location.reload = reload;
  });

  it('mocks reload function', () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it('calls reload function', () => {
    reloadFn();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
