import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';

test('renders Lights Out title', () => {
  const { getByText } = render(<GameBoard />);
  const linkElement = getByText(/Lights Out/i);
  expect(linkElement).toBeInTheDocument();
});

const title = "Lights Out";
let wrapper = shallow(<GameBoard>{title}</GameBoard>);

describe('GameBoard', () => {
  it('should render the GameBoard Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the GameBoards children', () => {
    expect(wrapper.find('h1').text()).toEqual(title);
    expect(wrapper.find('td').exists()).toBeTruthy();
  });

  it('toggles class active on click', () => {
    const gridCube = wrapper.find('td').first();
    const activate = gridCube.simulate('click');
    expect(activate).toMatchSnapshot();
    expect(wrapper.state('active')).toEqual(true);
  });
});

describe('reloads page on game start', () => {
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
