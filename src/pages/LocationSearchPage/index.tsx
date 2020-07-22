import { Autocomplete, Button, Form, H1, P, TextInput } from 'components';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CityInfo from 'models/CityInfo';

const LocationSearchPage: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestedCities, setSuggestedCities] = useState<CityInfo[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityInfo>();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandler = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(!selectedCity)
  }, []);

  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    const source = axios.CancelToken.source();
      const cancelToken = source.token;
      const apiKey = process.env.REACT_APP_ZOMATO_API_KEY;
      const config = {
        cancelToken,
        headers: {
          'user-key' : apiKey
        },
      };
      axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${searchText}&count=5`, config)
        .then(({ data }) => {
          const suggestedCities: CityInfo[] = data.location_suggestions.map((city: CityInfo) => ({
            entity_id : city.entity_id,
            title : city.title,
          }));
          setSuggestedCities(suggestedCities);
          source.cancel();
        })
        .catch(() => {
          setErrorMessage('There was a problem getting suggested cities, just type in your own!');
          source.cancel();
      })
  }, [searchText]);

  const suggestionOnClickHandler = useCallback((index: number) => {
    const selectedLocation = suggestedCities[index];
    setSelectedCity(selectedLocation);
    setSearchText(selectedLocation.title);
    setSuggestedCities([]);
  }, [suggestedCities]);

  return (
    <PageContainer>
      <Header>
        <H1>What Don't You Want?!</H1>
      </Header>
      <MainContent>
        <P>{errorMessage}</P>
        <Form onSubmit={onSubmitHandler}>
          <TextInput
            onChange={onChangeHandler}
            value={searchText}
            title="Location Search"
            placeholder="Enter your city here!"
          />
          <Autocomplete
            suggestions={suggestedCities}
            suggestionOnClick={suggestionOnClickHandler}
          />
          <Button
            type='submit'
            title='Search'
          />
        </Form>
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

export default LocationSearchPage;