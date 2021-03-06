import React from 'react';
import styled from 'styled-components';

const NextWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 20px) scale(1.6);
  opacity: 0;
  transition: all .4s;
  z-index: -1;
  &.visible {
    opacity: .4;
    transform: translateX(-50%) scale(1.6);
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: .8;
    }
  }
`;

interface Props {
  isNextVisible: boolean;
  next: () => void
}

const Next: React.FC<Props> = props => {
  return (
    <NextWrapper className={props.isNextVisible ? 'visible' : ''} onClick={() => props.next()}>
      <svg className="icon">
        <use xlinkHref="#icon-down"/>
      </svg>
    </NextWrapper>
  );
};

export default Next;