import React from 'react';
import { render, screen, fireEvent, waitForElement, wait } from "@testing-library/react";
import LocationSearchPage from '../LocationSearchPage';
import axios from 'axios';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import CuisineListPage from 'pages/CuisineListPage';

describe('<LocationSearchPage/>', () => {

  describe('Enter Address - Autocompletion', () => {
    it('Valid Address displays in autocomplete', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          location_suggestions: [
            {
              entity_id: 100,
              title: 'Atlanta, GA',
            },
          ],
        },
      });

      render(
        <Router initialEntries={['/']}>
          <Route exact path='/' component={LocationSearchPage} />
        </Router>
      );
      
      const locationSearchTextInput = screen.getByTestId('Location SearchTextInput') as HTMLInputElement;

      fireEvent.change(locationSearchTextInput, { target: { value: 'Atlanta' } });
      expect(locationSearchTextInput.value).toEqual('Atlanta');

      await waitForElement(() => screen.getByText('Atlanta, GA'));

      expect(screen.getByText('Atlanta, GA')).toBeInTheDocument();
    });

    it('Invalid Address displays error message', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce({});

      render(
        <Router initialEntries={['/']}>
          <Route exact path='/' component={LocationSearchPage} />
        </Router>
      );
      
      const locationSearchTextInput = screen.getByTestId('Location SearchTextInput') as HTMLInputElement;

      fireEvent.change(locationSearchTextInput, { target: { value: 'Atlanta Kentucky' } });
      expect(locationSearchTextInput.value).toEqual('Atlanta Kentucky');

      await waitForElement(() => screen.getByText('There was a problem getting suggested cities, just type in your own!'));
    });
  });

  describe('Submit address', () => {
    it('User is taken to Cuisine List Page after submitting a valid address', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({});
  
      render(<LocationSearchPage />);
        
      fireEvent.change(screen.getByTestId(''), { target: { value: '' } });
      expect(screen.getByTestId('').nodeValue).toEqual('');
  
      expect(screen.getByText('')).toBeInTheDocument();
      
      fireEvent.click(screen.getByText(''));
  
      fireEvent.click(screen.getByTestId(''));
  
      await waitForElement(() => screen.getByText(''));
  
      expect(screen.getByText('')).toBeVisible();
    });
  
    it('User is presented error when trying to submit non autocompleted result', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce({});
  
      render(
        <Router initialEntries={['/']}>
          <Route exact path='/' component={LocationSearchPage} />
          <Route exact path='' component={CuisineListPage}/>
        </Router>
      );

      const locationSearchTextInput = screen.getByTestId('Location SearchTextInput') as HTMLInputElement;
        
      fireEvent.change(locationSearchTextInput, { target: { value: 'Atlanta' } });
      expect(locationSearchTextInput.value).toEqual('Atlanta');
      
      fireEvent.click(screen.getByTestId('SearchButton'));
  
      await waitForElement(() => screen.getByText('Please select an autocompleted city!'));
    });
  });
});