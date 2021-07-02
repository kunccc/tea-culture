import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Page6 from '../pages/Page6';
import Next from './Next';
import Back from './Back';

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
  const [isNextVisible, setNextVisible] = useState(false);
  const [isBackVisible, setBackVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPage1Visited, setPage1Visited] = useState(false);
  const [isPage2Visited, setPage2Visited] = useState(false);
  const [isPage3Visited, setPage3Visited] = useState(false);
  const [isPage4Visited, setPage4Visited] = useState(false);
  const [isPage5Visited, setPage5Visited] = useState(false);
  const [isPage6Visited, setPage6Visited] = useState(false);
  const pageMap = [isPage1Visited, isPage2Visited, isPage3Visited, isPage4Visited, isPage6Visited, isPage6Visited];
  const setPageMap = [setPage1Visited, setPage2Visited, setPage3Visited, setPage4Visited, setPage5Visited, setPage6Visited];
  const height = document.documentElement.clientHeight;
  const back = () => {
    if (currentPage === 2) setBackVisible(false);
    main.current!.scrollTo({top: height * (currentPage - 2), behavior: 'smooth'});
    setCurrentPage(n => n - 1);
    setNextVisible(true);
  };
  const next = () => {
    main.current!.scrollTo({top: height * currentPage, behavior: 'smooth'});
    if (!pageMap[currentPage] || currentPage === 5) setNextVisible(false);
    setCurrentPage(n => n + 1);
    setBackVisible(true);
  };
  useEffect(() => {
    setPageMap[currentPage - 1](true);
  }, [currentPage]);
  return (
    <MainWrapper className={props.isStart ? 'visible' : ''} ref={main}>
      <Page1 setDownVisible={setNextVisible}/>
      <Page2 setDownVisible={setNextVisible} isPage2Visited={isPage2Visited}/>
      <Page3 setDownVisible={setNextVisible} isPage3Visited={isPage3Visited}/>
      <Page4 setDownVisible={setNextVisible} isPage4Visited={isPage4Visited}/>
      <Page5 setDownVisible={setNextVisible} isPage5Visited={isPage5Visited}/>
      <Page6 setDownVisible={setNextVisible} isPage6Visited={isPage6Visited}/>
      <Back isBackVisible={isBackVisible} back={back}/>
      <Next isNextVisible={isNextVisible} next={next}/>
    </MainWrapper>
  );
};

export default Main;