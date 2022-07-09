/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import Home from '../screen';
import Todo from '../screen/todo';

const Tab = createBottomTabNavigator();

function TabNav() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { height: 60, backgroundColor: colors.background },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Notes"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="To Do Lists"
        component={Todo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="check-square" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
