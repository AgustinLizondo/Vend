import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/stores';
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScren from 'expo-splash-screen';
import * as Font from 'expo-font';
import Fonts, {
  bold,
  semiBold,
  medium,
  regular,
} from './src/theme/Fonts';
import AppContainer from './src/navigators/AppContainer';

SplashScren.preventAutoHideAsync();

const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);

  const onLayoutRootView = useCallback(async () => {
    if (isLoading) {
      await SplashScren.hideAsync();
    }
  }, [isLoading]);

  useEffect(() => {
    const prepare = async () => {
      try{
         await Font.loadAsync({
             [Fonts.Bold]: bold,
             [Fonts.SemiBold]: semiBold,
             [Fonts.Medium]: medium,
             [Fonts.Regular]: regular,
         });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    prepare();
  }, []);

  useEffect(() => {
    onLayoutRootView();
  }, [isLoading, onLayoutRootView]);

  if (isLoading) {
    return null;
  }

  return (
    <Provider
      store={store}
    >
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
