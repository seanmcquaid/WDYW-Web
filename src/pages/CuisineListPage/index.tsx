import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'store';
import axios from 'axios';

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
      
    </PageContainer>
  )
};

const PageContainer = styled.div``;

export default CuisineListPage;