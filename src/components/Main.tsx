import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  opacity: 0;
  &.visible {
    animation: show 1.8s both;
  }
  @keyframes show {
    0% {

    }
    65% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(-180px);
    }
  }
`;

interface Props {
  isStart: boolean
}

const Main: React.FC<Props> = props => {
  return (
    <MainWrapper className={props.isStart ? 'visible' : ''}>
      hi
    </MainWrapper>
  );
};

export default Main;