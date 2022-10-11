import React from 'react';
import { LoadingContainer, LoadingProgress } from './styles';

type LoadingProps = { isLoading: boolean };

const Loading: React.FC<LoadingProps> = ({ isLoading }) =>
  isLoading ? (
    <LoadingContainer>
      <LoadingProgress />
    </LoadingContainer>
  ) : null;

export default Loading;
