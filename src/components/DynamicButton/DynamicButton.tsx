import React from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
  onClick: () => void;
  label: string;

}

const DynamicButton: React.FC<ButtonProps> = ({ label, onClick }) => {

  const handleClick = () => {
    onClick();

  };

  return (

    <ButtonStyled onClick={handleClick}>
      {label}
    </ButtonStyled>

  );
};

export default DynamicButton;
