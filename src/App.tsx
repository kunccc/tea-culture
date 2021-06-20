import React, {useState} from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Main from './components/Main';
import Back from './components/Back';

const AppWrapper = styled.div`
  background: #486e88;
  color: #fff;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  font-size: 17px;
  &.hide {
    max-height: 100vh;
    overflow: hidden;
  }
`;

const App: React.FC = () => {
  const [isStart, setStart] = useState(false);
  return (
    <AppWrapper className={isStart ? '' : 'hide'}>
      <Home isStart={isStart} setStart={setStart}/>
      <Main isStart={isStart}/>
      <Back isStart={isStart} setStart={setStart}/>
    </AppWrapper>
  );
};

export default App;
