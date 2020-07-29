import Restaurant from 'models/Restaurant';
import React from 'react';
import styled from 'styled-components';

type RestaurantListProps = {
  restaurantList: Restaurant[];
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurantList }) => (
  <StyledRestaurantList>
    {restaurantList.map(({restaurant}: Restaurant) => (
      <StyledRestaurant key={restaurant.name} data-testid='restaurantInfo'>
        {restaurant.name}
      </StyledRestaurant>
    ))}
  </StyledRestaurantList>
);

const StyledRestaurantList = styled.ul`
  display : flex;
  flex-direction : column;
  height : 400px;
  width : 100%;
  list-style : none;
  overflow : auto;
`;

const StyledRestaurant = styled.li`
  flex : 1;
  margin : 0.5rem;
`;

export default RestaurantList;