import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Main from './components/Main';

const AppWrapper = styled.div`
  background: #486e88;
  color: #fff;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 17px;
  &.hide {
    max-height: 100vh;
    overflow: hidden;
  }
`;

const App: React.FC = () => {
  const [isStart, setStart] = useState(false);
  const [codeNum] = useState([37, 38, 39, 40]);
  useEffect(() => {
    document.body.addEventListener('wheel', e => e.preventDefault(), {passive: false});
    document.body.addEventListener('keydown', e => {
      if (codeNum.indexOf(e.keyCode) >= 0) e.preventDefault();
    }, {passive: false});
  }, []);
  return (
    <AppWrapper className={isStart ? '' : 'hide'}>
      <Home isStart={isStart} setStart={setStart}/>
      <Main isStart={isStart}/>
    </AppWrapper>
  );
};

export default App;
