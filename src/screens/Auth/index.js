import React, { useContext } from 'react';
import { Wrapper, Container, Main, Button } from './styles';

import AuthContext from '../../contexts/auth';

const Auth = () => {
  const { signIn } = useContext(AuthContext);
  function handleSignIn() {
    signIn();
  }
  return (
    <Wrapper>
      <Container>
        <Main>
          <Button title="Login" onPress={handleSignIn} />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Auth;
