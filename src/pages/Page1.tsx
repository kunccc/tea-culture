import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Page1Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  .man {
    .people {
      width: 200px;
      opacity: 0;
      animation: show 1s 2s both;
      &.inVisible {
        cursor: pointer;
      }
      @keyframes show {
        from {
          transform: translateX(-110px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
  .leaf1 {
    width: 74px;
    opacity: 0;
    transform: translate(-62px, -121px);
    transition: all .8s;
    &.visible {
      opacity: 1;
    }
  }
  .text {
    transform: translateX(-30px);
    p {
      max-width: 22vw;
      &.text1 {
        opacity: 0;
        margin-bottom: 80px;
        animation: arise 1s 3s both;
      }
      &.text2 {
        opacity: 0;
        &.visible {
          animation: arise 1s 1s both;
        }
      }
    }
  }
  .pot {
    display: flex;
    flex-direction: column;
    opacity: 0;
    cursor: pointer;
    transition: opacity 1s 2s;
    &.visible {
      opacity: 1;
    }
    .lid {
      width: 76.8px;
      margin-bottom: 4px;
      transform: translateX(44px);
      transition: all .4s ease;
      &.off {
        transform: translate(55px, 26px) rotate(25.8deg)
      }
    }
    .potBody {
      width: 172.8px;
    }
  }
  .book {
    width: 91px;
    height: 109px;
    opacity: 0;
    &.visible {
      animation: show2 .8s 1s both;
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
  setDownVisible: (key: boolean) => void
}

const Page1: React.FC<Props> = props => {
  const [isLeafVisible, setLeafVisible] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);
  const [isPotVisible, setPotVisible] = useState(false);
  const [isOff, setOff] = useState(false);
  const [isBookVisible, setBookVisible] = useState(false);
  const showLeaf = () => {
    setLeafVisible(true);
    setTextVisible(true);
    setPotVisible(true);
  };
  const off = () => {
    setOff(true);
    setBookVisible(true);
    setTimeout(() => props.setDownVisible(true), 2000);
  };
  return (
    <Page1Wrapper className="page">
      <div className="man">
        <img src="/src/images/people.png" alt="" className={`people ${isLeafVisible ? '' : 'inVisible'}`}
             onClick={showLeaf}/>
        <img src="/src/images/leaf1.png" alt="" className={`leaf1 ${isLeafVisible ? 'visible' : ''}`}/>
      </div>
      <div className="text">
        <p className="text1">
          中国茶文化是中国制茶、饮茶文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，至今已有4700多年了。
        </p>
        <p className={`text2 ${isTextVisible ? 'visible' : ''}`}>
          直到现在，汉族还有民以茶代礼的风俗，其中的潮州工夫茶作为中国茶文化的古典流派，集中了中国茶道文化的精粹，作为中国茶道的代表入选国家级非物质文化遗产。
        </p>
      </div>
      <div className={`pot ${isPotVisible ? 'visible' : ''}`} onClick={off}>
        <img src="/src/images/lid.png" alt="" className={`lid ${isOff ? 'off' : ''}`}/>
        <img src="/src/images/pot.png" alt="" className="potBody"/>
      </div>
      <img src="/src/images/book.png" alt="" className={`book ${isBookVisible ? 'visible' : ''}`}/>
    </Page1Wrapper>
  );
};

export default Page1;