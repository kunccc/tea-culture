import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Click from '../components/Click';

const Page2Wrapper = styled.div`
  position: relative;
  text-align: center;
  .text1 {
    margin: 40px 0 60px;
  }
  .text2 {
    opacity: 0;
    margin: 90px 0 60px;
    &.visible {
      animation: arise 1s 2.4s ease both;
    }
  }
  img {
    width: 60px;
    opacity: 0;
    &.knife {
      width: 87px;
      margin-right: 40px;
      &.visible {
        animation: arise 1s .8s ease both;
      }
    }
    &.hand {
      width: 63px;
      margin-right: 40px;
      &.visible {
        animation: arise 1s 1.1s ease both;
      }
    }
    &.car {
      width: 75px;
      &.visible {
        animation: arise 1s 1.4s ease both;
      }
    }
    &.tree {
      width: 75px;
      &.visible {
        cursor: pointer;
        animation: arise 1s 3.4s ease both;
      }
    }
    &.ban {
      width: 200px;
      position: absolute;
      top: -53px;
      left: 50%;
      transform: translateX(-50%);
      transition: all .4s .8s ease-out;
      z-index: -1;
      &.visible {
        z-index: 1;
        opacity: 1;
        transform: translateX(-50%) scale(.55);
      }
    }
  }
  .wrapper {
    position: relative;
    .click {
      position: absolute;
      top: 60px;
      left: 54%;
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
  isPage2Visited: boolean;
}

const Page2: React.FC<Props> = props => {
  const clickRef = useRef(null);
  const [isBanVisible, setBanVisible] = useState(false);
  const onClickHandler = () => {
    setBanVisible(true);
    // @ts-ignore
    clickRef.current.setDone(true);
    // @ts-ignore
    clickRef.current.setMark(true);
    setTimeout(() => props.setDownVisible(true), 1600);
  };
  useEffect(() => {
    if (props.isPage2Visited) setTimeout(() => {
      // @ts-ignore
      if (!clickRef.current.mark) clickRef.current.setDone(false);
    }, 4400);
  }, [props.isPage2Visited]);
  return (
    <Page2Wrapper className="page">
      <p className={`text1`}>
        ???????????????????????????????????????????????????????????? ????????????
      </p>
      <img src="knife.png" alt=""
           className={`knife ${props.isPage2Visited ? 'visible' : ''}`}/>
      <img src="hand.png" alt=""
           className={`hand ${props.isPage2Visited ? 'visible' : ''}`}/>
      <img src="car.png" alt=""
           className={`car ${props.isPage2Visited ? 'visible' : ''}`}/>
      <p className={`text2 ${props.isPage2Visited ? 'visible' : ''}`}>
        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br/>??????????????????????????????????????????????????????????????????????????????
      </p>
      <div className="wrapper">
        <img src="tree.png" alt=""
             className={`tree ${props.isPage2Visited ? 'visible' : ''}`}
             onClick={onClickHandler}/>
        <img src="ban.png" alt="" className={`ban ${isBanVisible ? 'visible' : ''}`}/>
        <Click ref={clickRef}/>
      </div>
    </Page2Wrapper>
  );
};

export default Page2;