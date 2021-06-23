import React from 'react';
import styled from 'styled-components';

const Page3Wrapper = styled.div`
`;

interface Props {
  setDownVisible: (key: boolean) => void
}

const Page3: React.FC<Props> = props => {
  return (
    <Page3Wrapper className="page">
      红茶是全发酵茶，冲泡红茶最好用刚煮沸的水，投茶的茶水比一般为1:50（即一克红茶对应50ml水）冲泡时间以3~5分钟为佳，高档工夫红条茶可冲泡3~4次，红碎茶仅可冲泡1~2次。为了能够泡茶红茶原味的口感与富有层次感的滋味，最好选用盖碗来冲泡。
    </Page3Wrapper>
  );
};

export default Page3;