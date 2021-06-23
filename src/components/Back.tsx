import React from 'react';
import styled from 'styled-components';

const BackWrapper = styled.div`
  position: fixed;
  top: 40px;
  left: 50px;
  opacity: 0;
  z-index: -1;
  cursor: pointer;
  color: #fff;
  transform: scale(1.6);
  transition: all .5s;
  &.visible {
    transition: all .4s 1.5s;
    opacity: .8;
    z-index: 10;
  }
`;

interface Props {
  isStart: boolean;
  setStart: (key: boolean) => void
}

const Back: React.FC<Props> = props => {
  const back = () => {
    props.setStart(false);
    scrollTo({top: 0, behavior: 'smooth'});
  };
  return (
    <BackWrapper className={props.isStart ? 'visible' : ''} onClick={back}>
      <svg className="icon">
        <use xlinkHref="#icon-left"/>
      </svg>
    </BackWrapper>
  );
};

export default Back;