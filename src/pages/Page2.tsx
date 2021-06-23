import React, {useEffect} from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Page2Wrapper = styled.div`
  img {
    width: 60px;
    opacity: 0;
    &.knife {
      width: 58px;
      animation: arise 1s ease both;
    }
    &.hand {
      animation: arise 1s .5s ease both;
      width: 48px;
    }
    &.car {
      animation: arise 1s 1s ease both;
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
  setDownVisible: (key: boolean) => void
}

const Page2: React.FC<Props> = props => {
  return (
    <Page2Wrapper className="page">
      <p className={`xxx`}>
        通常，采摘方法有：手摘法、刀割法、 机采法。
      </p>
      <p>
        茶树属四季常青而隔年交替落叶的植物，因此，合理做好鲜叶的采摘与留养，是持续长久确保茶树生长茂盛和优质丰产丰收的关键。“掠夺式”的采摘或过盛的留叶均不利于茶叶生产与发展。
      </p>
    </Page2Wrapper>
  );
};

export default Page2;