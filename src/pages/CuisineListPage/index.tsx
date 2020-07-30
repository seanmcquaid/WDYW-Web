import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'store';
import axios from 'axios';
import { Button, H1, CuisineList, LoadingSpinner } from 'components';
import Cuisine from 'models/Cuisine';
import { useHistory } from 'react-router-dom';
import { setCuisines } from 'actions';

const CuisineListPage: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const history = useHistory();
  const { title, entity_id } = state.selectedLocation;
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [cuisineList, setCuisineList] = useState<Cuisine[]>([]);

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
      axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${entity_id}`, config)
        .then(({ data }) => {
          setCuisineList(data.cuisines);
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
  });

  const cuisineOnClickHandler = useCallback((cuisine: Cuisine) => {
    const leftoverCuisineList = cuisineList.filter(item => item !== cuisine);
    setCuisineList(leftoverCuisineList);
  }, [cuisineList]);

  const nextPageOnClickHandler = useCallback(() => {
    dispatch(setCuisines(cuisineList));
    history.push('/restaurantList');
  }, [dispatch, cuisineList, history]);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading}/>;
  }
  
  return (
    <PageContainer>
      <Header>
        <H1>{errorMessage.length > 0 ? errorMessage : `Cuisine List For ${title}`}</H1>
      </Header>
      <MainContent>
        <CuisineList
          cuisineList={cuisineList}
          cuisineOnClick={cuisineOnClickHandler}
        />
        <Button
          title='Next Page'
          onClick={nextPageOnClickHandler}
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

export default CuisineListPage;