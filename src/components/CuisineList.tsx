import React from 'react';
import styled from 'styled-components';
import Cuisine from "models/Cuisine";

type CuisineListProps = {
  cuisineList: Cuisine[];
  cuisineOnClick: (index: number) => void;
};

const CuisineList: React.FC<CuisineListProps> = ({ cuisineList, cuisineOnClick }) => (
  <StyledCuisineList>
    {cuisineList.map((cuisine, index) => (
      <StyledCuisine onClick={() => cuisineOnClick(index)} key={cuisine.cuisine_id}>
        {cuisine.cuisine_name}
      </StyledCuisine>
    ))}
  </StyledCuisineList>
);

const StyledCuisineList = styled.ul``;

const StyledCuisine = styled.li``;

export default CuisineList;