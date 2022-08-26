import React from 'react'
import Tabs from "./views/pages/tabbar/tabs"
import Login from "./views/pages/personal/login/login"
import Register from "./views/pages/personal/login/register"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Index" component={Tabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
