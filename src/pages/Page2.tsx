import React, {useState} from 'react';
import styled from 'styled-components';

const Page2Wrapper = styled.div`
  position: relative;
  .text1 {
    margin: 40px 0 50px;
  }
  .text2 {
    opacity: 0;
    margin: 70px 0 50px;
    &.visible {
      animation: arise 1s 2.5s ease both;
    }
  }
  img {
    width: 60px;
    opacity: 0;
    margin-right: 40px;
    &.knife {
      width: 87px;
      &.visible {
        animation: arise 1s .5s ease both;
      }
    }
    &.hand {
      width: 63px;
      &.visible {
        animation: arise 1s 1s ease both;
      }
    }
    &.car {
      width: 75px;
      &.visible {
        animation: arise 1s 1.5s ease both;
      }
    }
    &.tree {
      width: 75px;
      &.visible {
        cursor: pointer;
        animation: arise 1s 3.5s ease both;
      }
    }
    &.ban {
      width: 200px;
      position: absolute;
      top: 395px;
      left: 38px;
      transition: all .4s ease-out;
      z-index: -1;
      &.visible {
        z-index: 1;
        opacity: 1;
        transform: scale(.5);
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

const Page2: React.FC<Props> = props => {
  const [isBanVisible, setBanVisible] = useState(false);
  const onClickHandler = () => {
    setBanVisible(true);
    setTimeout(() => props.setDownVisible(true), 1000);
  };
  return (
    <Page2Wrapper className="page">
      <p className={`text1`}>
        通常，采摘方法有：刀割法、手摘法、 机采法。
      </p>
      <img src="/src/images/knife.png" alt="" className={`knife ${props.currentPage === 2 ? 'visible' : ''}`}/>
      <img src="/src/images/hand.png" alt="" className={`hand ${props.currentPage === 2 ? 'visible' : ''}`}/>
      <img src="/src/images/car.png" alt="" className={`car ${props.currentPage === 2 ? 'visible' : ''}`}/>
      <p className={`text2 ${props.currentPage === 2 ? 'visible' : ''}`}>
        茶树属四季常青而隔年交替落叶的植物，因此，合理做好鲜叶的采摘与留养，是持续长久确保茶树生长茂盛和优质丰产丰收的关键。<br/>“掠夺式”的采摘或过盛的留叶均不利于茶叶生产与发展。
      </p>
      <img src="/src/images/tree.png" alt="" className={`tree ${props.currentPage === 2 ? 'visible' : ''}`}
           onClick={onClickHandler}/>
      <img src="/src/images/ban.png" alt="" className={`ban ${isBanVisible ? 'visible' : ''}`}/>
    </Page2Wrapper>
  );
};

export default Page2;