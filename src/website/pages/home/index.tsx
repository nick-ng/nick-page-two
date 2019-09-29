import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
`;

const Copy = styled.p`
  color: red;
`;

const Home = () => {
  return (
    <div>
      <Title>Nick Ng</Title>
      <Copy>Test two</Copy>
    </div>
  )
}