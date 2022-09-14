import React from 'react';
import LoadingContainer from './style';

export default function Loading() {
  return (
    <LoadingContainer>
      <i className="bx bxs-dish bx-fade-up" />
      <i className="bx bxs-wine bx-fade-down" />
    </LoadingContainer>
  );
}
