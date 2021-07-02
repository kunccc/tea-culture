import React, {useState} from 'react';
import styled from 'styled-components';

const Page4Wrapper = styled.div`
  text-align: center;
  .img {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
    .heart {
      width: 50px;
      opacity: 0;
      &.visible {
        animation: heartArise .8s ease both;
      }
    }
    .marry {
      width: 250px;
      opacity: 0;
      &.visible {
        cursor: pointer;
        animation: arise .8s 1.8s ease both;
      }
      &.heartVisible {
        cursor: default;
      }
    }
  }
  .text1 {
    opacity: 0;
    &.visible {
      animation: arise .8s .8s ease both;
    }
  }
  .text2 {
    opacity: 0;
    &.visible {
      animation: arise .8s 1s ease both;
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
  @keyframes heartArise {
    from {
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface Props {
  setDownVisible: (key: boolean) => void;
  isPage6Visited: boolean;
}

const Page6: React.FC<Props> = props => {
  const [heartVisible, setHeartVisible] = useState(false);
  const onCLickHandler = () => {
    setHeartVisible(true);
  };
  return (
    <Page4Wrapper className="page">
      <p>在婚礼中，茶经常被作为礼仪的一部分用于迎亲或结婚仪式中。有新郎、新娘的“交杯茶”、“和合茶”，或向父母尊长敬献的“谢恩茶”、“认亲茶”等仪式。</p>
      <p
        className={`text1 ${props.isPage6Visited ? 'visible' : ''}`}>总之，从古到今，我国的许多地方，在缔婚的每一个过程中，往往都离不开茶来作礼仪。</p>
      <div className="img" onClick={onCLickHandler}>
        <img src="/src/images/heart.png" alt="" className={`heart ${heartVisible ? 'visible' : ''}`}/>
        <img src="/src/images/marry.png" alt=""
             className={`marry ${props.isPage6Visited ? 'visible' : ''} ${heartVisible ? 'heartVisible' : ''}`}/>
      </div>
      <p className={`text2 ${heartVisible ? 'visible' : ''}`}>除此之外以茶待客、以茶会友、以茶联谊也是古代沿袭下来的饮茶习俗。</p>
    </Page4Wrapper>
  );
};

export default Page6;