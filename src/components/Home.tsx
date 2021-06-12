import React, {useState} from 'react';
import styled from 'styled-components';
import Tea from './Tea';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  &.hide {
    animation: hideHome 1.5s both;
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
    0% {
      opacity: 1;
    }
    40% {
      z-index: 10;
      transform: translateY(0);
    }
    60% {
      opacity: 1;
      transform: translateY(15px);
    }
    100% {
      opacity: 0;
      z-index: -1;
      transform: translateY(-100px);
    }
  }
  @keyframes hideHome {
    100% {
      z-index: -1;
    }
  }
`;

interface Props {
  isStart: boolean;
  start: () => void
}

const Home: React.FC<Props> = props => {
  return (
    <HomeWrapper className={props.isStart ? 'hide' : ''}>
      <Tea/>
      <button onClick={() => props.start()}>start</button>
    </HomeWrapper>
  );
};

export default Home;