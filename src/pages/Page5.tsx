import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Click from '../components/Click';

const Page3Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  .wrapper {
    padding: 100px 0;
    text-align: center;
    .bowl {
      opacity: 0;
      transform: translate(-28px, 70px) scale(1.15);
      transition: all .8s 3.9s ease;
      &.visible {
        opacity: 1;
        transform: translate(-28px, 20px) scale(1.15);
      }
      .click {
        position: absolute;
        top: 70px;
        left: 380px;
      }
    }
    p {
      margin-bottom: 90px;
      &.text2 {
        margin-bottom: 100px;
        opacity: 0;
        &.visible {
          animation: arise .8s 2.9s ease both;
        }
      }
      &.number {
        font-size: 40px;
        margin: 0;
        opacity: 0;
        transform: scale(1.2);
        transition: all .8s 1.9s ease;
        &.visible {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
    img {
      width: 70px;
      &.leaf2 {
        opacity: 0;
        margin-right: 50px;
        &.visible {
          animation: arise .8s .8s ease both;
        }
      }
      &.water {
        opacity: 0;
        width: 62px;
        &.visible {
          animation: arise .8s 1.1s ease both;
        }
      }
      &.bowl_cap {
        width: 64px;
        transition: all .4s .8s;
        cursor: pointer;
        &.visible {
          cursor: none;
          transform: rotate(58.5deg) translate(14px, -88px);
        }
      }
      &.bowl_body {
        width: 125px;
        transform: translateX(-11px);
        cursor: pointer;
        &.visible {
          cursor: default;
        }
      }
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
  isPage5Visited: boolean;
}

const Page5: React.FC<Props> = props => {
  const clickRef = useRef(null);
  const [bowlClose, setBowlClose] = useState(false);
  const onClickHandler = () => {
    setBowlClose(true);
    // @ts-ignore
    clickRef.current.setDone(true);
    // @ts-ignore
    clickRef.current.setMark(true);
    setTimeout(() => props.setDownVisible(true), 1600);
  };
  useEffect(() => {
    if (props.isPage5Visited) setTimeout(() => {
      // @ts-ignore
      if (!clickRef.current.mark) clickRef.current.setDone(false);
    }, 4600);
  }, [props.isPage5Visited]);
  return (
    <Page3Wrapper className="page">
      <div className="wrapper">
        <p className="text1">
          红茶是全发酵茶，冲泡红茶最好用刚煮沸的水，投茶的茶水比一般为 1:50。
        </p>
        <div className="item">
          <img src="../images/leaf2.png" alt=""
               className={`leaf2 ${props.isPage5Visited ? 'visible' : ''}`}/>
          <img src="../images/water.png" alt=""
               className={`water ${props.isPage5Visited ? 'visible' : ''}`}/>
          <p
            className={`number ${props.isPage5Visited ? 'visible' : ''}`}>1&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;50</p>
        </div>
      </div>
      <div className="wrapper">
        <p className={`text2 ${props.isPage5Visited ? 'visible' : ''}`}>
          为了能够泡茶红茶原味的口感与富有层次感的滋味，最好选用盖碗来冲泡。
        </p>
        <div className={`bowl ${props.isPage5Visited ? 'visible' : ''}`}
             onClick={onClickHandler}>
          <img src="../images/bowl-cap.png" alt="" className={`bowl_cap ${bowlClose ? 'visible' : ''}`}/>
          <img src="../images/bowl-body.png" alt="" className={`bowl_body ${bowlClose ? 'visible' : ''}`}/>
          <Click ref={clickRef}/>
        </div>
      </div>
    </Page3Wrapper>
  );
};

export default Page5;