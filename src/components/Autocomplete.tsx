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
      <AutocompleteSuggestion onClick={() => suggestionOnClick(index)}>
        {suggestion.name}
      </AutocompleteSuggestion>))}
  </AutocompleteSuggestions>
);

const AutocompleteSuggestions = styled.ul``;

const AutocompleteSuggestion = styled.li``;

export default Autocomplete;