import React, { useContext } from 'react';
import { Wrapper, Container, Main, Button } from './styles';
import { Header } from '../../components';
import AuthContext from '../../contexts/auth';

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <Button title="Logout" onPress={handleSignOut} />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
