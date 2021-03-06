import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Click from '../components/Click';

const Page1Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20vw !important;
  .man {
    position: relative;
    .people {
      width: 200px;
      opacity: 0;
      &.visible {
        animation: show 1s 1s both;
      }
      &.inVisible {
        cursor: pointer;
      }
    }
    .leaf1 {
      position: absolute;
      top: 165px;
      left: 140px;
      width: 74px;
      opacity: 0;
      transition: all .8s .8s;
      &.visible {
        opacity: 1;
      }
    }
    .click {
      position: absolute;
      top: 190px;
      left: 170px;
    }
  }
  .text {
    p {
      max-width: 22vw;
      &.text1 {
        opacity: 0;
        margin-bottom: 80px;
        &.visible {
          animation: arise 1s 2s both;
        }
      }
      &.text2 {
        opacity: 0;
        &.visible {
          animation: arise 1s 1.8s both;
        }
      }
    }
  }
  .pot {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s 2.8s;
    &.visible {
      transform: translateX(0);
      cursor: pointer;
      opacity: 1;
    }
    &.off {
      cursor: default;
    }
    .lid {
      width: 76.8px;
      margin-bottom: 4px;
      transform: translateX(44px);
      transition: all .4s .8s ease;
      &.off {
        transform: translate(55px, 26px) rotate(25.8deg)
      }
    }
    .potBody {
      width: 172.8px;
    }
    .click {
      position: absolute;
      top: 100px;
      left: 170px;
    }
  }
  @keyframes show {
    from {
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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
  @keyframes show2 {
    from {
      transform: translate(50px, 20px);
    }
    to {
      opacity: 1;
      transform: translate(0, 20px);
    }
  }
`;

interface Props {
  setDownVisible: (key: boolean) => void;
  isPage1Visited: boolean;
  isStart: boolean
}

const Page1: React.FC<Props> = props => {
  const click1Ref = useRef(null);
  const click2Ref = useRef(null);
  const [isLeafVisible, setLeafVisible] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);
  const [isPotVisible, setPotVisible] = useState(false);
  const [isOff, setOff] = useState(false);
  const showLeaf = () => {
    setLeafVisible(true);
    setTextVisible(true);
    setPotVisible(true);
    // @ts-ignore
    click1Ref.current.setDone(true);
    // @ts-ignore
    click1Ref.current.setMark(true);
    setTimeout(() => {
      // @ts-ignore
      if (!click2Ref.current.mark) click2Ref.current.setDone(false);
    }, 4000);
  };
  const off = () => {
    setOff(true);
    // @ts-ignore
    click2Ref.current.setDone(true);
    // @ts-ignore
    click2Ref.current.setMark(true);
    setTimeout(() => props.setDownVisible(true), 1600);
  };
  useEffect(() => {
    if (props.isStart) setTimeout(() => {
      // @ts-ignore
      if (!click1Ref.current.mark) click1Ref.current.setDone(false);
    }, 3000);
  }, [props.isStart]);
  return (
    <Page1Wrapper className="page">
      <div className="man">
        <img src="people.png" alt=""
             className={`people ${props.isStart ? 'visible' : ''} ${isLeafVisible ? '' : 'inVisible'}`}
             onClick={showLeaf}/>
        <img src="leaf1.png" alt="" className={`leaf1 ${isLeafVisible ? 'visible' : ''}`}/>
        <Click ref={click1Ref}/>
      </div>
      <div className="text">
        <p className={`text1 ${props.isStart ? 'visible' : ''}`}>
          ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????4700????????????
        </p>
        <p className={`text2 ${isTextVisible ? 'visible' : ''}`}>
          ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </p>
      </div>
      <div className={`pot ${isPotVisible ? 'visible' : ''} ${isOff ? 'off' : ''}`} onClick={off}>
        <img src="lid.png" alt="" className={`lid ${isOff ? 'off' : ''}`}/>
        <img src="pot.png" alt="" className="potBody"/>
        <Click ref={click2Ref}/>
      </div>
    </Page1Wrapper>
  );
};

export default Page1;