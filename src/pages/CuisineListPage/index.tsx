import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'store';

const CuisineListPage: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  console.log(state);
  
  return (
    <PageContainer>
      
    </PageContainer>
  )
};

const PageContainer = styled.div``;

export default CuisineListPage;