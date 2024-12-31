
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FoodRecognition from './screens/FoodRecognition';
import MealHistory from './screens/MealHistory';
import Insights from './screens/Insights';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Food Recognition" component={FoodRecognition} />
        <Tab.Screen name="Meal History" component={MealHistory} />
        <Tab.Screen name="Insights" component={Insights} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
