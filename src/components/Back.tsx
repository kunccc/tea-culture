import React from 'react';
import styled from 'styled-components';

const NextWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -20px) scale(1.6) rotate(180deg);
  opacity: 0;
  transition: all .4s;
  z-index: -1;
  &.visible {
    opacity: .4;
    transform: translateX(-50%) scale(1.6) rotate(180deg);
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: .8;
    }
  }
`;

interface Props {
  isBackVisible: boolean;
  back: () => void
}

const Back: React.FC<Props> = props => {
  return (
    <NextWrapper className={props.isBackVisible ? 'visible' : ''} onClick={() => props.back()}>
      <svg className="icon">
        <use xlinkHref="#icon-down"/>
      </svg>
    </NextWrapper>
  );
};

export default Back;