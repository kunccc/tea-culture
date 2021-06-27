import React from 'react';
import styled from 'styled-components';

const Page5Wrapper = styled.div`
`;

interface Props {
  setDownVisible: (key: boolean) => void;
  currentPage: number
}

const Page5: React.FC<Props> = props => {
  return (
    <Page5Wrapper className="page">
      更多茶介绍、茶的种类、相关的诗词、文学作品
    </Page5Wrapper>
  );
};

export default Page5;