import React from 'react';
import styled from 'styled-components';

const NextWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) scale(1.6);
  opacity: 0;
  transition: opacity .4s;
  &.visible {
    opacity: .8;
    cursor: pointer;
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