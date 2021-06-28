import React from 'react';
import styled from 'styled-components';

const ClickImg = styled.img`
  width: 50px;
  opacity: .5;
  animation: change .4s ease infinite alternate-reverse;
  @keyframes change {
    to {
      transform: scale(1.1);
    }
  }
`;

const Click: React.FC = () => {
  return (
    <ClickImg src="/src/images/click.png" className="click"/>
  );
};

export default Click;