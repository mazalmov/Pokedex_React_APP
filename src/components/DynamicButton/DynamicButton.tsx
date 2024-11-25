import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;

}

const DynamicButton: React.FC<ButtonProps> = ({ label, onClick }) => {

  const handleClick = () => {
    onClick();

  };

  return (
      <button onClick={handleClick}>
        {label}
      </button>
  );
};

export default DynamicButton;