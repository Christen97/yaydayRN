import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import FilterScreen from '../screens/FilterScreen';
import BookScreen from '../screens/BookScreen';

const navTheme = DefaultTheme;
navTheme.colors.background = '#fae3f7';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
            <Stack.Screen name="FilterScreen" component={FilterScreen} />
            <Stack.Screen name="BookScreen" component={BookScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;