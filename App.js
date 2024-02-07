import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import FilterScreen from './src/screens/FilterScreen';
import BookScreen from './src/screens/BookScreen';
import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.root}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f0f4'
  }
});