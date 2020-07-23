import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'store';
import axios from 'axios';
import { H1 } from 'components';

const CuisineListPage: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      
    }

    return () => {
      isMounted.current = false;
    }
  });
  
  return (
    <PageContainer>
      <Header>
        <H1>Cuisine List</H1>
      </Header>
    </PageContainer>
  )
};

const PageContainer = styled.div``;

const Header = styled.header``;

const MainContent = styled.main``;

export default CuisineListPage;