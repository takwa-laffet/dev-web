import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders hello message', () => {
  render(<Hello name="sara" />);
  const message = screen.getByText(/Hello, Sara!/i);
  expect(message).toBeInTheDocument();
});
