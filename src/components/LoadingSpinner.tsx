import React from 'react';
import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';

type LoadingSpinnerProps = {
  isLoading: boolean;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => (
  <LoadingSpinnerContainer data-testid='loadingSpinner'>
    <BounceLoader loading={isLoading}/>
  </LoadingSpinnerContainer>
);

const LoadingSpinnerContainer = styled.div`
  position : absolute;
  top : 50%;
  right : 50%;
`;

export default LoadingSpinner;