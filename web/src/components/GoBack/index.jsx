import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackContainer from './style';

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <GoBackContainer type="button" onClick={() => navigate(-1)}>
      <i className="bx bx-left-arrow-circle bx-fade-left-hover" />
    </GoBackContainer>
  );
}
