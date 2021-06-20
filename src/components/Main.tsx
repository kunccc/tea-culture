import React, {useEffect} from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import Page1 from '../pages/Page1';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Page2 from '../pages/Page2';

const MainWrapper = styled.div`
  opacity: 0;
  padding: 100px 0;
  transition: all .7s;
  .page {
    min-height: 75vh;
  }
  &.visible {
    transition: all .7s 1s;
    opacity: 1;
    transform: translateY(-453.2px);
  }
`;

interface Props {
  isStart: boolean
}

const Main: React.FC<Props> = props => {
  useEffect(() => {
    ScrollReveal().reveal('.page', {
      distance: '500px',
      duration: 500,
      easing: 'ease-out',
      interval: 100,
      opacity: 0,
      reset: true
    });
  }, []);
  return (
    <MainWrapper className={props.isStart ? 'visible' : ''}>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </MainWrapper>
  );
};

export default Main;