// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    expect(render(<Controls />) ).toMatchSnapshot();
  });
});

test('toggleClosed is called when close gate button is clicked', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleClosedMock} />
  )
  fireEvent.click(getByText(/close gate/i));
  expect(toggleClosedMock).toHaveBeenCalled();
});

test('toggleClosed is called when open gate button is clicked', () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={toggleClosedMock} closed={true} />
  )
  // fireEvent.click(getByText(/close gate/i));
  // expect(toggleClosedMock).toHaveBeenCalled();
  fireEvent.click(getByText(/open gate/i));
  expect(toggleClosedMock).toHaveBeenCalled();
});