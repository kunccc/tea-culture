import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Page1Wrapper = styled.div`
  .people {
    width: 200px;
    position: absolute;
    top: 110px;
    left: 150px;
    opacity: 0;
    animation: show 1s 3s both;
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
  .leaf1 {
    width: 74px;
    position: absolute;
    top: 275px;
    left: 290px;
    opacity: 0;
    transition: all .8s;
    &.visible {
      opacity: 1;
    }
  }
`;

const Page1: React.FC = () => {
  const [isLeafVisible, setLeafVisible] = useState(false);
  const showLeaf = () => setLeafVisible(true);
  useEffect(() => {
    ScrollReveal().reveal('.people', {
      distance: '500px',
      duration: 500,
      origin: 'left',
      easing: 'ease-out',
      opacity: 0,
      reset: true
    });
  }, []);
  return (
    <Page1Wrapper className="page">
      中国茶文化是中国制茶、饮茶文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，至今已有4700多年了。直到现在，汉族还有民以茶代礼的风俗。其中的潮州工夫茶作为中国茶文化的古典流派，集中了中国茶道文化的精粹，作为中国茶道的代表入选国家级非物质文化遗产。
      <img src="/src/images/people.png" alt="" className={`people ${isLeafVisible ? '' : 'inVisible'}`}
           onClick={showLeaf}/>
      <img src="/src/images/leaf1.png" alt="" className={`leaf1 ${isLeafVisible ? 'visible' : ''}`}/>
    </Page1Wrapper>
  );
};

export default Page1;