import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from "native-base";
import {AppNavigation} from './config/router'
import { Provider } from 'react-redux';
import store from './store/index';

export const App  = () => {
  return (
    <Provider store={store}>
    <Root>
    <NavigationContainer>
    <AppNavigation/>
    </NavigationContainer>
    </Root>
    </Provider>
  );
}
export default App;