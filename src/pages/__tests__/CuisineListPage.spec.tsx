import React from 'react';
import { fireEvent, render, screen, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';
import CuisineListPage from 'pages/CuisineListPage';
import axios from 'axios';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { RestaurantListPage } from 'pages';

describe('<CuisineListPage/>', () => {
  it('List of cuisines displays', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        cuisines: [
          {
            cuisine: {
              cuisine_id: "00",
              cuisine_name : "Test Cuisine",
            },
          },
          {
            cuisine: {
              cuisine_id: "01",
              cuisine_name : "Test Cuisine1",
            },
          },
        ],
      },
    });

    render(
      <Router initialEntries={['/cuisineList']}>
        <Route exact path='/cuisineList' component={CuisineListPage} />
      </Router>
    );

    await waitForElement(() => screen.getAllByTestId('cuisine'));

    expect(screen.getAllByTestId('cuisine').length).toBeGreaterThan(0);
  });

  it('Error displays when there is an issue loading cuisines', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({});

    render(
      <Router initialEntries={['/cuisineList']}>
        <Route exact path='/cuisineList' component={CuisineListPage} />
      </Router>
    );

    await waitForElement(() => screen.getByText('There was a problem getting cuisines, just type in your own!'));
  });

  it('Clicking a cuisine removes it', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        cuisines: [
          {
            cuisine: {
              cuisine_id: "00",
              cuisine_name : "Test Cuisine1",
            },
          },
          {
            cuisine: {
              cuisine_id: "01",
              cuisine_name : "Test Cuisine12",
            },
          },
        ],
      },
    });

    render(
      <Router initialEntries={['/cuisineList']}>
        <Route exact path='/cuisineList' component={CuisineListPage} />
      </Router>
    );

    await waitForElement(() => screen.getAllByTestId('cuisine'));

    fireEvent.click(screen.getByText('Test Cuisine12'));

    expect(screen.queryByText('Test Cuisine12')).toBeNull();
  });

  it('User is taken to restaurant list page after clicking button', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        cuisines: [
          {
            cuisine: {
              cuisine_id: "00",
              cuisine_name : "Test Cuisine",
            },
          },
          {
            cuisine: {
              cuisine_id: "01",
              cuisine_name : "Test Cuisine1",
            },
          },
        ],
      },
    });
    
    render(
      <Router initialEntries={['/cuisineList']}>
        <Route exact path='/cuisineList' component={CuisineListPage} />
        <Route exact path='/restaurantList' component={RestaurantListPage} />
      </Router>
    );

    await waitForElement(() => screen.getAllByTestId('cuisine'));

    fireEvent.click(screen.getByTestId('Next PageButton'));

    await waitForElement(() => screen.getByText('Recommended Restaurants'));
  });
});