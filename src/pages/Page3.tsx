import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Click from '../components/Click';

const Page3Wrapper = styled.div`
  text-align: center;
  position: relative;
  .text1 {
    margin-top: 100px;
  }
  .text2 {
    opacity: 0;
    &.visible {
      animation: arise .8s .8s ease both;
    }
  }
  .text3 {
    font-size: 22px;
    margin: 90px 0 40px;
    opacity: 0;
    transition: opacity .4s 1.8s ease;
    z-index: -1;
    &.visible {
      opacity: 1;
      z-index: 1;
      cursor: pointer;
    }
    &.done {
      cursor: default;
    }
  }
  .text4 {
    margin-bottom: 6px;
    span {
      margin-right: 46px;
      &:last-child {
        margin: 0;
      }
    }
  }
  .text5 {
    margin-top: 4px;
    opacity: 0;
    transition: opacity .8s 2.1s ease;
    &.visible {
      opacity: 1;
    }
    span {
      margin-right: 430px;
      &:last-child {
        margin: 0;
      }
    }
  }
  img {
    width: 500px;
    height: 25px;
  }
  .mask {
    position: absolute;
    top: 420px;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 100px;
    background: #486e88;
    transition: all 2s .8s ease;
    &.visible {
      transform: translate(25vw);
    }
  }
  .wrapper {
    position: relative;
    .click {
      position: absolute;
      top: 10px;
      left: 56%;
      z-index: 2;
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface Props {
  setDownVisible: (key: boolean) => void;
  isPage3Visited: boolean;
}

const Page3: React.FC<Props> = props => {
  const clickRef = useRef(null);
  const [isArrowVisible, setArrowVisible] = useState(false);
  const onClickHandler = () => {
    setArrowVisible(true);
    // @ts-ignore
    clickRef.current.setDone(true);
    // @ts-ignore
    clickRef.current.setMark(true);
    setTimeout(() => props.setDownVisible(true), 2900);
  };
  useEffect(() => {
    if (props.isPage3Visited) setTimeout(() => {
      // @ts-ignore
      if (!clickRef.current.done) clickRef.current.setDone(false);
    }, 2600);
  }, [props.isPage3Visited]);
  return (
    <Page3Wrapper className="page">
      <p className={`text1`}>我国的茶叶分类上，依据品种及加工工艺的不同一般将其归为六大类：绿茶、红茶、白茶、青茶、黄茶、黑茶。其中青茶又叫乌龙茶。</p>
      <p className={`text2 ${props.isPage3Visited ? 'visible' : ''}`}>
        这些茶类依据发酵程度又可再分类：不发酵茶（绿茶）、轻发酵茶（黄茶、白茶）、半发酵茶（青茶）、全发酵茶（红茶）、后发酵茶（黑茶）。</p>
      <div className="wrapper">
        <p className={`text3 ${props.isPage3Visited ? 'visible' : ''} ${isArrowVisible ? 'done' : ''}`}
           onClick={onClickHandler}>发酵程度</p>
        <Click ref={clickRef}/>
      </div>
      <p className={`text4`}>
        <span>绿茶</span><span>白茶</span><span>黄茶</span><span>青茶</span><span>红茶</span><span>黑茶</span>
      </p>
      <img src="arrow.png" alt=""/>
      <p className={`text5 ${isArrowVisible ? 'visible' : ''}`}><span>0%</span><span>100%</span></p>
      <div className={`mask ${isArrowVisible ? 'visible' : ''}`}/>
    </Page3Wrapper>
  );
};

export default Page3;