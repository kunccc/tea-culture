import React, {useRef, useState} from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const next = () => {
    const height = document.documentElement.clientHeight;
    main.current!.scrollTo({top: height * createId(), behavior: 'smooth'});
    setDownVisible(false);
    setCurrentPage(n => n + 1);
  };
  return (
    <MainWrapper className={props.isStart ? 'visible' : ''} ref={main} id="xxx">
      <Page1 setDownVisible={setDownVisible}/>
      <Page2 setDownVisible={setDownVisible} currentPage={currentPage}/>
      <Page3 setDownVisible={setDownVisible} currentPage={currentPage}/>
      <Page4 setDownVisible={setDownVisible} currentPage={currentPage}/>
      <Page5 setDownVisible={setDownVisible} currentPage={currentPage}/>
      <Next isDownVisible={isDownVisible} next={next}/>
    </MainWrapper>
  );
};

export default Main;