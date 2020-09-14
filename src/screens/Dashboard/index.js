import React from 'react';
import { Wrapper, Container, Main, Text } from './styles';
import { Header } from '../../components';

const Dashboard = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <Text>Dashboard</Text>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
