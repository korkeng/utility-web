import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('renders learn react link', () => {
  const tree = render(<NavigationBar />);
  expect(tree).toMatchSnapshot();
});
