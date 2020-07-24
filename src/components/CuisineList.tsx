import React from 'react';
import styled from 'styled-components';
import Cuisine from "models/Cuisine";

type CuisineListProps = {
  cuisineList: Cuisine[];
  cuisineOnClick: (cuisine: Cuisine) => void;
};

const CuisineList: React.FC<CuisineListProps> = ({ cuisineList, cuisineOnClick }) => (
  <StyledCuisineList>
    {cuisineList.map(cuisine => (
      <StyledCuisine onClick={() => cuisineOnClick(cuisine)} key={cuisine.cuisine.cuisine_id}>
        {cuisine.cuisine.cuisine_name}
      </StyledCuisine>
    ))}
  </StyledCuisineList>
);

const StyledCuisineList = styled.ul`
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
  height : 100%;
  overflow : auto;
  list-style : none;
`;

const StyledCuisine = styled.li`
  flex : 1;
  margin : 0.5rem;
`;

export default CuisineList;