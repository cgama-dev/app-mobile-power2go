import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import colors from '../../theme/global';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${`${statusBarHeight}px`};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${colors.white};
`;

export const Main = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Button = styled.Button`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
