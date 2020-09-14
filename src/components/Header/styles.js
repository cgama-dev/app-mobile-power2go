import styled from 'styled-components/native';
import colors from '../../theme/global';

export const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: rgb(216, 216, 216);
`;

export const OnlineStatus = styled.View`
  background: ${colors.green};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${colors.primary};
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
