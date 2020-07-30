import React from 'react';
import CityInfo from 'models/CityInfo';
import styled from 'styled-components';

type AutocompleteProps = {
  suggestions: CityInfo[];
  suggestionOnClick: (index: number) => void;
};

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions, suggestionOnClick }) => (
  <AutocompleteSuggestions>
    {suggestions.map((suggestion, index) => (
      <AutocompleteSuggestion onClick={() => suggestionOnClick(index)} key={suggestion.entity_id}>
        {suggestion.title}
      </AutocompleteSuggestion>))}
  </AutocompleteSuggestions>
);

const AutocompleteSuggestions = styled.ul`
  font-family: 'Cabin', sans-serif;
  list-style: none;
`;

const AutocompleteSuggestion = styled.li`
  background-color : #DB5461;
  margin : 0.5rem;
  padding : 0.5rem;
`;

export default Autocomplete;