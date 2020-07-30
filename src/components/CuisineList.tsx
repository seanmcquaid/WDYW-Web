import React from 'react';
import styled from 'styled-components';
import Cuisine from "models/Cuisine";

type CuisineListProps = {
  cuisineList: Cuisine[];
  cuisineOnClick: (cuisine: Cuisine) => void;
};

const CuisineList: React.FC<CuisineListProps> = ({ cuisineList, cuisineOnClick }) => (
  <StyledCuisineList data-testid='cuisineList'>
    {cuisineList.map(cuisine => (
      <StyledCuisine onClick={() => cuisineOnClick(cuisine)} key={cuisine.cuisine.cuisine_id} data-testid='cuisine'>
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
  width : 100%;
  overflow : auto;
  list-style : none;
  font-family: 'Cabin', sans-serif;
`;

const StyledCuisine = styled.li`
  flex : 1;
  background-color : #DB5461;
  margin : 0.5rem;
  padding : 0.5rem;
  color : black;
  border-radius : 10px;
  display : flex;
  justify-content : center;
  align-items : center;
`;

export default CuisineList;