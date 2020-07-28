import Restaurant from 'models/Restaurant';
import { RestaurantListPage } from 'pages';
import React from 'react';
import styled from 'styled-components';

type RestaurantListProps = {
  restaurantList: Restaurant[];
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurantList }) => (
  <StyledRestaurantList>
    {restaurantList.map(restaurant => (
      <StyledRestaurant></StyledRestaurant>
    ))};
  </StyledRestaurantList>
);

const StyledRestaurantList = styled.ul`
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
  height : 100%;
  overflow : auto;
  list-style : none;
`;

const StyledRestaurant = styled.li`
  flex : 1;
  margin : 0.5rem;
`;

export default RestaurantList;