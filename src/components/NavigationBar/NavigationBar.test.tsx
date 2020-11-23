import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('NavigationBar', () => {
  const tree = render(<NavigationBar />);
  expect(tree).toMatchSnapshot();
});
