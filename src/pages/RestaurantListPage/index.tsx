import { clearPreferences } from 'actions';
import axios from 'axios';
import { Button, H1, RestaurantList } from 'components';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from 'store';
import styled from 'styled-components';

const RestarauntListPage: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { selectedCuisines, selectedLocation } = state;
  const history = useHistory();
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isMounted.current) {
      const source = axios.CancelToken.source();
      const cancelToken = source.token;
      const apiKey = process.env.REACT_APP_ZOMATO_API_KEY;
      const config = {
        cancelToken,
        headers: {
          'user-key' : apiKey
        },
      };
      const { entity_id } = selectedLocation;
      let formattedCuisines = '';
      selectedCuisines.forEach(cuisine => {
        formattedCuisines += `${cuisine.cuisine.cuisine_name},`;
      });
      axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&cuisines=${formattedCuisines}`, config)
        .then(({ data }) => {
          setRestaurants(data.restaurants);
          setIsLoading(false);
          source.cancel();
        })
        .catch(() => {
          setErrorMessage('There was a problem getting cuisines, just type in your own!');
          setIsLoading(false);
          source.cancel();
      })
    }
    return () => {
      isMounted.current = false;
    };
  }, [selectedCuisines, selectedLocation]);

  const homePageOnClickHandler = useCallback(() => {
    dispatch(clearPreferences());
    history.push('/');
  }, [dispatch, history]);

  if (isLoading) {
    return <H1>Loading</H1>
  }

  console.log(restaurants);

  return (
    <PageContainer>
      <Header>
        <H1>{errorMessage.length > 0 ? errorMessage : 'Recommended Restaurants'}</H1>
      </Header>
      <MainContent>
        <RestaurantList
          restaurantList={restaurants}
        />
        <Button
          title='Home'
          onClick={homePageOnClickHandler}
        />
      </MainContent>
    </PageContainer>
  )
};

const PageContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  height : 100%;
  width : 100%;
`;

const Header = styled.header`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;

const MainContent = styled.main`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  overflow : auto;
`;

export default RestarauntListPage;