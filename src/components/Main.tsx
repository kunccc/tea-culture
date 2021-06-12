import React, {useEffect} from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const MainWrapper = styled.div`
  opacity: 0;
  .item {
    height: 50vh;
  }
  &.visible {
    animation: show 1.8s both;
  }
  @keyframes show {
    0% {
    }
    65% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(-180px);
    }
  }
`;

interface Props {
  isStart: boolean
}

const Main: React.FC<Props> = props => {
  useEffect(() => {
    ScrollReveal().reveal('.item', {
      distance: '500px',
      duration: 500,
      easing: 'ease-out',
      interval: 100,
      opacity: 0,
      reset: true
    });
  }, []);
  return (
    <MainWrapper className={props.isStart ? 'visible' : ''}>
      <div
        className="item">中国茶文化是中国制茶、饮茶文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，少说也有4700多年了。直到现在，汉族还有民以茶代礼的风俗。其中的潮州工夫茶作为中国茶文化的古典流派，集中了中国茶道文化的精粹，作为中国茶道的代表入选国家级非物质文化遗产。
      </div>
      <div
        className="item">采摘方法有：手摘法、刀割法、机采法。传统的手摘法适合用于高档茶的采摘。在长期实践中的“虎口对芯”采摘法，是将拇指和食指分开，从芽梢顶端中心插下，稍加扭折向上一提，将芽梢采下。可避免捏在手中的芽梢受热和压伤并且才下的鲜叶均匀度较一致。
      </div>
      <div
        className="item">红茶是全发酵茶，冲泡红茶最好用刚煮沸的水，投茶的茶水比一般为1:50（即一克红茶对应50ml水）冲泡时间以3~5分钟为佳，高档工夫红条茶可冲泡3~4次，红碎茶仅可冲泡1~2次。为了能够泡茶红茶原味的口感与富有层次感的滋味，最好选用盖碗来冲泡。
      </div>
      <div
        className="item">在婚礼中，茶经常被作为礼仪的一部分用于迎亲或结婚仪式中。有新郎、新娘的“交杯茶”、“和合茶”，或向父母尊长敬献的“谢恩茶”、“认亲茶”等仪式。总之，从古到今，我国的许多地方，在缔婚的每一个过程中，往往都离不开茶来作礼仪。除此之外以茶待客、以茶会友、以茶联谊也是古代沿袭下来的饮茶习俗。
      </div>
      <div
        className="item">更多茶介绍、茶的种类、相关的诗词、文学作品
      </div>
    </MainWrapper>
  );
};

export default Main;