import React from 'react';
import { fireEvent, render, screen, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';
import CuisineListPage from 'pages/CuisineListPage';
import axios from 'axios';

describe('<CuisineListPage/>', () => {
  it('List of cuisines displays', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});

    render(<CuisineListPage />);

    await waitForElement(() => screen.getAllByTestId(''));

    expect(screen.getAllByTestId('').length).toBeGreaterThan(0);
  });

  it('Clicking a cuisine removes it', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});

    render(<CuisineListPage />);

    await waitForElement(() => screen.getAllByTestId(''));

    fireEvent.click(screen.getByText(''));

    await waitForElementToBeRemoved(() => screen.getByText(''));

    expect(screen.queryByText('')).toBeNull();
  });

  it('User is taken to restaurant list page after clicking button', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});
    
    render(<CuisineListPage />);

    await waitForElement(() => screen.getAllByTestId(''));

    fireEvent.click(screen.getByTestId(''));

    await waitForElement(() => screen.getByText(''));

    expect(screen.getByText('')).toBeInTheDocument();
  });
});