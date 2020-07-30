import React from 'react';
import { fireEvent, render, screen, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { RestaurantListPage, LocationSearchPage } from 'pages';

describe('<RestarauntListPage/>', () => {
  it('List of restaurants display when provided valid cuisines', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        restaurants: [
          { 
            restaurant: {
              cuisines: 'Cuisines Here',
              location: {
                address: 'Address',
                locality: 'Locality',
                city: 'City',
              },
              menu_url: 'Menu Url',
              name: 'Name Here',
              price_range: 10,
              user_rating: {
                aggregate_rating : "10",
              },
            },
          },
        ]
      }
    });

    render(
      <Router initialEntries={['/restaurantList']}>
        <Route exact path='/restaurantList' component={RestaurantListPage} />
      </Router>
    );

    await waitForElement(() => screen.getAllByTestId('restaurantInfo'));

    expect(screen.getAllByTestId('restaurantInfo').length).toBeGreaterThan(0);
  });

  it('User is taken home after clicking button', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        restaurants: [],
      },
    });
    
    render(
      <Router initialEntries={['/restaurantList']}>
        <Route exact path='/restaurantList' component={RestaurantListPage} />
        <Route exact path='/' component={LocationSearchPage}/>
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('loadingSpinner'));

    expect(screen.getByText('No results, try again!')).toBeInTheDocument();
  });

  it('Error displays if there is an issue finding restaurants', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({});

    render(
      <Router initialEntries={['/restaurantList']}>
        <Route exact path='/restaurantList' component={RestaurantListPage} />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('loadingSpinner'));

    expect(screen.getByText('There was a problem getting cuisines, just type in your own!')).toBeInTheDocument();
  });

  it('User is taken home after clicking button', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        restaurants: [
          { 
            restaurant: {
              cuisines: 'Cuisines Here',
              location: {
                address: 'Address',
                locality: 'Locality',
                city: 'City',
              },
              menu_url: 'Menu Url',
              name: 'Name Here',
              price_range: 10,
              user_rating: {
                aggregate_rating : "10",
              },
            },
          },
        ]
      }
    });
    
    render(
      <Router initialEntries={['/restaurantList']}>
        <Route exact path='/restaurantList' component={RestaurantListPage} />
        <Route exact path='/' component={LocationSearchPage}/>
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('loadingSpinner'));

    fireEvent.click(screen.getByTestId('HomeButton'));

    await waitForElement(() => screen.getByText('What Don\'t You Want?!'));
  });
});