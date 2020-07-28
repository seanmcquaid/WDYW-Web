import axios from 'axios';
import { H1 } from 'components';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from 'store';
import styled from 'styled-components';

const RestarauntListPage: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
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
      axios.get(`https://developers.zomato.com/api/v2.1/`, config)
        .then(({ data }) => {
          console.log(data);
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
  }, []);

  const homePageOnClickHandler = useCallback(() => {

  }, []);

  if (isLoading) {
    return <H1>Loading</H1>
  }

  return (
    <PageContainer>
      <Header>
        <H1>{errorMessage.length > 0 ? errorMessage : 'Recommended Restaurants'}</H1>
      </Header>
      <MainContent>

      </MainContent>
    </PageContainer>
  )
};

const PageContainer = styled.div``;

const Header = styled.header``;

const MainContent = styled.main``;

export default RestarauntListPage;