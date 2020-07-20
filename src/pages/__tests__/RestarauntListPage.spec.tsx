import React from 'react';
import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import RestarauntListPage from 'pages/RestaurantListPage';
import axios from 'axios';

describe('<RestarauntListPage/>', () => {
  it('List of restaurants display when provided valid cuisines', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});

    render(<RestarauntListPage />);

    await waitForElement(() => screen.getByTestId(''));

    expect(screen.getByTestId('')).toBeInTheDocument();
  });

  it('Error displays if no restaurants are found', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});

    render(<RestarauntListPage />);

    await waitForElement(() => screen.getByTestId(''));

    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('User is taken home after clicking button', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({});
    
    render(<RestarauntListPage />);

    await waitForElement(() => screen.getByTestId(''));

    fireEvent.click(screen.getByTestId(''));

    await waitForElement(() => screen.getByText(''));
  });
});