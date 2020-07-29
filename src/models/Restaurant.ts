interface Restaurant {
  restaurant: {
    cuisines: string,
    menu_url: string,
    name: string,
    price_range: number,
    location: {
      address: string,
      locality: string,
      city : string,
    },
    user_rating: {
      aggregate_rating: string,
    },
  },
};

export default Restaurant;