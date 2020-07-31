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
        <StyledRestaurantName>{restaurant.name}</StyledRestaurantName>
        <StyledRestaurantPriceRange>{restaurant.price_range}</StyledRestaurantPriceRange>
        <StyledRestaurantRating>{restaurant.user_rating.aggregate_rating}</StyledRestaurantRating>
        <StyledMenuLink target="blank" href={restaurant.menu_url}> Menu </StyledMenuLink>
      </StyledRestaurant>
    ))}
  </StyledRestaurantList>
);

const StyledRestaurantList = styled.ul`
  display : flex;
  flex-direction : column;
  height : 400px;
  width : 500px;
  list-style : none;
  overflow-y: auto;
  font-family: 'Cabin', sans-serif;
`;

const StyledRestaurant = styled.li`
  flex : 1;
  background-color : #DB5461;
  margin : 0.5rem;
  padding : 0.5rem;
  color : black;
  border-radius : 10px;
  display : flex;
  justify-content : space-between;
  align-items : center;
  flex-direction : row;
  width : 100%;
`;

const StyledRestaurantName = styled.span``;

const StyledRestaurantRating = styled.span``;

const StyledRestaurantPriceRange = styled.span``;

const StyledMenuLink = styled.a``;

export default RestaurantList;