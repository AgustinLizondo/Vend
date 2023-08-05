import React from 'react';
import LoggedNavigator from './LoggedNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import theme from '../theme';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

const AppContainer = () => {
  const isUserLogged = useSelector(({ auth }) => auth.isUserLogged);

  return (
    <NativeBaseProvider
      theme={theme}
    >
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        {isUserLogged ? (
          <LoggedNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppContainer;
