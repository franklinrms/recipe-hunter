import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './style';

export default function Button({ label, onClick, isSelected }) {
  return (
    <CustomButton type="button" onClick={onClick} isSelected={isSelected}>
      { label }
    </CustomButton>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
