/* eslint-disable react/no-unstable-nested-components */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import Home from '../screen';
import Todo from '../screen/todo';

const Tab = createMaterialTopTabNavigator();

function TabNav() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { height: 60, backgroundColor: colors.background },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { display: 'none' },
      }}
      tabBarPosition="bottom"
      showPageIndicator={false}
    >
      <Tab.Screen
        name="Notes"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="To Do Lists"
        component={Todo}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="check-square" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
