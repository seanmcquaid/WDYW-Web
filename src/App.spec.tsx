import { screen } from '@testing-library/react';

describe('App test', () => {
  expect(screen.getByText('React')).toBeInTheDocument();
});
