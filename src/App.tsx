import React, {useState} from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Main from './components/Main';

const AppWrapper = styled.div`
  background: #486e88;
  color: #fff;
  min-height: 100vh;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const App: React.FC = () => {
  const [isStart, setStart] = useState(false);
  const start = () => {
    setStart(true);
  };
  return (
    <AppWrapper>
      <Home isStart={isStart} start={() => start()}/>
      <Main isStart={isStart}/>
    </AppWrapper>
  );
};

export default App;
