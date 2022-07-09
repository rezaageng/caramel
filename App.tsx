/* eslint-disable react/style-prop-object */
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabNav from './navigation/TabNav';
import Dark from './theme/theme';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={Dark}>
        <TabNav />
      </NavigationContainer>
    </>
  );
}
