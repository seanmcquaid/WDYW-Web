import React from 'react';
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";
import LocationSearchPage from '../LocationSearchPage';

describe('<LocationSearchPage/>', () => {

  describe('Enter Address - Autocompletion', () => {
    it('Valid Address displays in autocomplete', () => {
      render(<LocationSearchPage />);
      
      fireEvent.change(screen.getByTestId(''), { target: { value: '' } });
      expect(screen.getByTestId('').nodeValue).toEqual('');

      expect(screen.getByText('')).toBeInTheDocument();
    });

    it('Invalid Address', () => {
      render(<LocationSearchPage />);
      
      fireEvent.change(screen.getByTestId(''), { target: { value: '' } });
      expect(screen.getByTestId('').nodeValue).toEqual('');

      expect(screen.getByText('There was no valid address')).toBeInTheDocument();
    });
  });

  it('User is taken to Cuisine List Page after submitting a valid address', async () => {
    render(<LocationSearchPage />);
      
    fireEvent.change(screen.getByTestId(''), { target: { value: '' } });
    expect(screen.getByTestId('').nodeValue).toEqual('');

    expect(screen.getByText('')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText(''));

    fireEvent.click(screen.getByTestId(''));

    await waitForElement(() => screen.getByText(''));

    expect(screen.getByText('')).toBeVisible();
  });
});