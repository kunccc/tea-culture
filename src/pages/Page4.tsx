import React, {useState} from 'react';
import styled from 'styled-components';

const Page4Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 200px !important;
  .title {
    margin-bottom: 80px;
  }
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .text1 {
      opacity: 0;
      &.visible {
        animation: arise .8s .8s ease both;
      }
    }
    .text2 {
      opacity: 0;
      &.visible {
        animation: arise .8s 2.5s ease both;
      }
    }
    .step {
      display: flex;
      align-items: center;
      margin-top: 40px;
    }
    img {
      margin-right: 26px;
      opacity: 0;
      &.visible {
        opacity: 1;
      }
    }
    .add1, .add2 {
      width: 25px;
    }
    .cup {
      width: 90px;
      cursor: pointer;
      &.done {
        cursor: default;
      }
    }
    .water {
      width: 55px;
    }
    .leaf {
      width: 60px;
    }
    .top {
      .cup {
        &.visible {
          opacity: 0;
          animation: arise .8s 1.6s ease both;
        }
      }
      .add1 {
        transition: opacity .8s ease;
      }
      .water {
        transition: opacity .8s .5s ease;
      }
      .add2 {
        transition: opacity .8s 1s ease;
      }
      .leaf {
        transition: opacity .8s 1.5s ease;
      }
    }
    .bottom {
      .cup {
        &.visible {
          opacity: 0;
          animation: arise .8s 3.3s ease both;
        }
      }
      .add1 {
        transition: opacity .8s ease;
      }
      .leaf {
        transition: opacity .8s .5s ease;
      }
      .add2 {
        transition: opacity .8s 1s ease;
      }
      .water {
        transition: opacity .8s 1.5s ease;
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
  isPage4Visited: boolean;
}

const Page4: React.FC<Props> = props => {
  const [isStep1Visible, setStep1Visible] = useState(false);
  const [isStep2Visible, setStep2Visible] = useState(false);
  const onClickHandler = () => {
    setStep2Visible(true);
    setTimeout(() => props.setDownVisible(true), 2300);
  };
  return (
    <Page4Wrapper className="page">
      <p className="title">绿茶是不发酵茶，冲泡绿茶时水温应控制在75℃~85℃，投茶则有上、中、下投法。</p>
      <div className="wrapper">
        <div className="top">
          <p className={`text1 ${props.isPage4Visited ? 'visible' : ''}`}>上投法即先投水后投茶，多用于比较细嫩的绿茶。</p>
          <div className="step">
            <img src="/src/images/cup.png" alt=""
                 className={`cup ${props.isPage4Visited ? 'visible' : ''} ${isStep1Visible ? 'done' : ''}`}
                 onClick={() => setStep1Visible(true)}/>
            <img src="/src/images/add.png" alt="" className={`add1 ${isStep1Visible ? 'visible' : ''}`}/>
            <img src="/src/images/water.png" alt="" className={`water ${isStep1Visible ? 'visible' : ''}`}/>
            <img src="/src/images/add.png" alt="" className={`add2 ${isStep1Visible ? 'visible' : ''}`}/>
            <img src="/src/images/leaf2.png" alt="" className={`leaf ${isStep1Visible ? 'visible' : ''}`}/>
          </div>
        </div>
        <div className="bottom">
          <p className={`text2 ${isStep1Visible ? 'visible' : ''}`}>下投法即先投茶后投水，多用于质量一般的绿茶。</p>
          <div className="step">
            <img src="/src/images/cup.png" alt=""
                 className={`cup ${isStep1Visible ? 'visible' : ''} ${isStep2Visible ? 'done' : ''}`}
                 onClick={onClickHandler}/>
            <img src="/src/images/add.png" alt="" className={`add1 ${isStep2Visible ? 'visible' : ''}`}/>
            <img src="/src/images/leaf2.png" alt="" className={`leaf ${isStep2Visible ? 'visible' : ''}`}/>
            <img src="/src/images/add.png" alt="" className={`add2 ${isStep2Visible ? 'visible' : ''}`}/>
            <img src="/src/images/water.png" alt="" className={`water ${isStep2Visible ? 'visible' : ''}`}/>
          </div>
        </div>
      </div>
    </Page4Wrapper>
  );
};

export default Page4;