import React from 'react';
import styled from 'styled-components';

const NextWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 20px) scale(1.6);
  opacity: 0;
  transition: all .5s;
  z-index: -1;
  &.visible {
    opacity: .8;
    transform: translateX(-50%) scale(1.6);
    cursor: pointer;
    z-index: 2;
  }
`;

interface Props {
  isDownVisible: boolean;
  next: () => void
}

const Next: React.FC<Props> = props => {
  return (
    <NextWrapper className={props.isDownVisible ? 'visible' : ''} onClick={() => props.next()}>
      <svg className="icon">
        <use xlinkHref="#icon-down"/>
      </svg>
    </NextWrapper>
  );
};

export default Next;