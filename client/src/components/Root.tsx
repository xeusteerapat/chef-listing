import * as React from 'react';
import styled from 'styled-components';
import Chef from './Chef';

const Heading = styled.strong`
  display: block;
  font-size: 2rem;
  margin: 0.75em 0 1em;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Heading>Chefs and their Restaurants</Heading>
      <Chef />
    </Wrapper>
  );
};

export default Root;
