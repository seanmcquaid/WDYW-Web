import React from 'react';
import { fireEvent, render, screen, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';
import RestarauntListPage from 'pages/RestaurantListPage';
import axios from 'axios';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { RestaurantListPage } from 'pages';
import LocationSearchPage from 'pages/LocationSearchPage';

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

  it('Error displays if no restaurants are found', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({});

    render(
      <Router initialEntries={['/restaurantList']}>
        <Route exact path='/restaurantList' component={RestaurantListPage} />
      </Router>
    );

    await waitForElementToBeRemoved(() => screen.getByText('Loading'));

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

    await waitForElementToBeRemoved(() => screen.getByText('Loading'));

    fireEvent.click(screen.getByTestId('HomeButton'));

    await waitForElement(() => screen.getByText('What Don\'t You Want?!'));
  });
});