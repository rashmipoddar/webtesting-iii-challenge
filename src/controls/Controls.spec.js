// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    expect(render(<Controls />) ).toMatchSnapshot();
  });
});