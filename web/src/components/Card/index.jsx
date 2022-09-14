import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './style';

export default function Card({
  name, thumb, clickCard,
}) {
  return (
    <CardContainer
      type="button"
      onClick={clickCard}
      bg={thumb}
    >
      {/* <img
        src={thumb}
        alt="Thumb"
      /> */}
      { name }
    </CardContainer>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
  clickCard: PropTypes.func,
}.isRequired;
