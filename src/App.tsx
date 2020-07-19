import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CuisineListPage, LocationSearchPage, RestaurantListPage, ErrorPage } from './pages/index';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={LocationSearchPage} />
      <Route exact path='/cuisineList' component={CuisineListPage} />
      <Route exact path='/restaurantList' component={RestaurantListPage} />
      <Route component={ErrorPage}/>
    </Switch>
  </Router>
);

export default App;
