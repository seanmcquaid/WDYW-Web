import { H1 } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const RestarauntListPage: React.FC = () => {
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <PageContainer>
      <Header>
        <H1>Recommended Restaurants</H1>
      </Header>
      <MainContent>

      </MainContent>
    </PageContainer>
  )
};

const PageContainer = styled.div``;

const Header = styled.header``;

const MainContent = styled.main``;

export default RestarauntListPage;