/* eslint-disable react/style-prop-object */
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// eslint-disable-next-line camelcase
import { BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import TabNav from './navigation/TabNav';
import Dark from './theme/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  // prepare
  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      // eslint-disable-next-line camelcase
      await Font.loadAsync({ BalsamiqSans_400Regular });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <NavigationContainer theme={Dark}>
        <TabNav />
      </NavigationContainer>
    </View>
  );
}
