import React, {useState} from 'react';
import styled from 'styled-components';

const Page3Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  .wrapper {
    padding: 100px 0;
    &:last-child {
      transform: translateY(22px);
    }
    .bowl {
      opacity: 0;
      &.visible {
        animation: arise .8s 3s ease both;
      }
    }
    p {
      margin-bottom: 100px;
      &.text2 {
        opacity: 0;
        &.visible {
          animation: arise .8s 2.5s ease both;
        }
      }
      &.number {
        font-size: 40px;
        margin: 0;
        opacity: 0;
        transform: translateX(12px) scale(1.2);
        transition: all .8s 1.5s ease;
        &.visible {
          transform: translateX(12px) scale(1);
          opacity: 1;
        }
      }
    }
    .item {
      transform: translate(60px, -30px);
    }
    .bowl {
      transform: translate(73px, 10px);
    }
    img {
      width: 70px;
      &.leaf2 {
        opacity: 0;
        margin-right: 50px;
        &.visible {
          animation: arise .8s .6s ease both;
        }
      }
      &.water {
        opacity: 0;
        width: 65px;
        &.visible {
          animation: arise .8s .9s ease both;
        }
      }
      &.bowl_cap {
        width: 64px;
        transition: all .4s;
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
  currentPage: number
}

const Page3: React.FC<Props> = props => {
  const [bowlClose, setBowlClose] = useState(false);
  const onClickHandler = () => {
    setBowlClose(true);
    setTimeout(() => props.setDownVisible(true), 1000);
  };
  return (
    <Page3Wrapper className="page">
      <div className="wrapper">
        <p className="text1">
          红茶是全发酵茶，冲泡红茶最好用刚煮沸的水，<br/>投茶的茶水比一般为1:50（即一克红茶对应50ml水）冲泡时间以3~5分钟为佳。
        </p>
        <div className="item">
          <img src="/src/images/leaf2.png" alt="" className={`leaf2 ${props.currentPage === 3 ? 'visible' : ''}`}/>
          <img src="/src/images/water.png" alt="" className={`water ${props.currentPage === 3 ? 'visible' : ''}`}/>
          <p
            className={`number ${props.currentPage === 3 ? 'visible' : ''}`}>1&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;50</p>
        </div>
      </div>
      <div className="wrapper">
        <p className={`text2 ${props.currentPage === 3 ? 'visible' : ''}`}>
          为了能够泡茶红茶原味的口感与富有层次感的滋味，最好选用盖碗来冲泡。
        </p>
        <div className={`bowl ${props.currentPage === 3 ? 'visible' : ''}`} onClick={onClickHandler}>
          <img src="/src/images/bowl-cap.png" alt="" className={`bowl_cap ${bowlClose ? 'visible' : ''}`}/>
          <img src="/src/images/bowl-body.png" alt="" className={`bowl_body ${bowlClose ? 'visible' : ''}`}/>
        </div>
      </div>
    </Page3Wrapper>
  );
};

export default Page3;