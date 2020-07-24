import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'store';
import axios from 'axios';
import { Button, H1 } from 'components';
import Cuisine from 'models/Cuisine';

const CuisineListPage: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
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

  const cuisineOnClickHandler = useCallback((index: number) => {
    
  }, []);

  const nextPageOnClickHandler = useCallback(() => {

  }, []);

  if (isLoading) {
    return <H1>Loading</H1>
  }
  
  return (
    <PageContainer>
      <Header>
        <H1>{errorMessage.length > 0 ? errorMessage : `Cuisine List For ${title}`}</H1>
      </Header>
      <MainContent>
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

const Header = styled.header``;

const MainContent = styled.main``;

export default CuisineListPage;