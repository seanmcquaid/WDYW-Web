import { LoadingSpinner } from 'components';
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalContextProvider from 'store';

const App: React.FC = () => (
  <GlobalContextProvider>
    <Suspense fallback={<LoadingSpinner isLoading={true}/>}>
      <Router>
        <Switch>
          <Route exact path='/' component={lazy(() => import('pages/LocationSearchPage'))} />
          <Route exact path='/cuisineList' component={lazy(() => import('pages/CuisineListPage'))} />
          <Route exact path='/restaurantList' component={lazy(() => import('pages/RestaurantListPage'))} />
          <Route component={lazy(() => import('pages/ErrorPage'))}/>
        </Switch>
      </Router>
    </Suspense>
  </GlobalContextProvider>
);

export default App;
