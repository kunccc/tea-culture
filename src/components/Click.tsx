import React, {useImperativeHandle, useState} from 'react';
import styled from 'styled-components';

const ClickImg = styled.img`
  width: 50px !important;
  height: 50px !important;
  opacity: .5 !important;
  transition: opacity .4s ease;
  animation: change .4s ease infinite alternate-reverse;
  &.done {
    opacity: 0 !important;
  }
  @keyframes change {
    to {
      transform: scale(1.1);
    }
  }
`;

const Click = React.forwardRef((props, ref) => {
  const [isDone, setDone] = useState(true);
  const [mark, setMark] = useState(false);
  useImperativeHandle(ref, () => {return {isDone, setDone, mark, setMark};});
  return (
    <ClickImg src="/src/images/click.png" className={`click ${isDone ? 'done' : ''}`}/>
  );
});

export default Click;