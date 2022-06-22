/* eslint-disable react/style-prop-object */
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabNav from './navigation/TabNav';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={DarkTheme}>
        <TabNav />
      </NavigationContainer>
    </>
  );
}
