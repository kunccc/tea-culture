import React from 'react';
import styled from 'styled-components';
import Tea from './Tea';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  opacity: 1;
  transition: all .8s .5s;
  position: absolute;
  top: 0;
  &.hide {
    z-index: -1;
    opacity: 0;
    transform: translateY(-30px);
    transition: all 1s .5s;
    .tea {
      animation: hideTea 1.2s both;
    }
    button {
      animation: hideButton 0.5s both;
    }
  }
  .tea {
    margin-top: 25vh;
  }
  button {
    color: #486e88;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 5px 20px;
    margin-top: 50px;
    font-size: 18px;
    transform: translateX(-10px);
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .7;
    }
  }
  @keyframes hideButton {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }
  @keyframes hideTea {
    32% {
      z-index: 10;
      transform: translateY(0);
    }
    60% {
      opacity: 1;
      transform: translateY(18px);
    }
    100% {
      opacity: 0;
      z-index: -1;
      transform: translateY(-100px);
    }
  }
`;

interface Props {
  isStart: boolean;
  setStart: (key: boolean) => void
}

const Home: React.FC<Props> = props => {
  return (
    <HomeWrapper className={props.isStart ? 'hide' : ''}>
      <Tea/>
      <button onClick={() => props.setStart(true)}>start</button>
    </HomeWrapper>
  );
};

export default Home;