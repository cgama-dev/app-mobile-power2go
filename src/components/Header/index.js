import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../theme/global';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Header = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
