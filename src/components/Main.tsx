import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Page1 from '../pages/Page1';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Page2 from '../pages/Page2';
import Next from './Next';
import {createId} from '../createId';

const MainWrapper = styled.div`
  opacity: 0;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .page {
    height: calc(100vh - 200px);
    padding: 100px;
    scroll-snap-align: start;
    &:first-child {
      padding: 100px 200px;
    }
  }
  &.visible {
    opacity: 1;
  }
`;

interface Props {
  isStart: boolean
}

const Main: React.FC<Props> = props => {
  const main = useRef<HTMLDivElement>(null);
  const [isDownVisible, setDownVisible] = useState(false);
  const next = () => {
    const height = document.documentElement.clientHeight;
    main.current!.scrollTo({top: height * createId(), behavior: 'smooth'});
    setDownVisible(false);
  };
  useEffect(() => {
    if (main.current)
      main.current.addEventListener('scroll', e => {
        console.log('fuck');
        e.preventDefault();
      });
  });
  console.log('fuck');
  return (
    <MainWrapper className={props.isStart ? 'visible' : ''} ref={main} id="xxx">
      <Page1 setDownVisible={setDownVisible}/>
      <Page2 setDownVisible={setDownVisible}/>
      <Page3 setDownVisible={setDownVisible}/>
      <Page4 setDownVisible={setDownVisible}/>
      <Page5 setDownVisible={setDownVisible}/>
      <Next isDownVisible={isDownVisible} next={next}/>
    </MainWrapper>
  );
};

export default Main;