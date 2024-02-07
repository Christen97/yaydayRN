import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { styled } from "nativewind";
import Logo from "../../../assets/images/Logo_1.png";
import tailwind from "twrnc";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import LocationPic from "../../../assets/images/address-icon.png"
import ArrowPic from "../../../assets/images/arrow-thin-chevron-right-icon.png"
const StyledView = styled(View);

const Tab = createBottomTabNavigator();

export default function MyComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Update loading state to false once authentication state is determined
      setLoading(false);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Render loading indicator or null
    return null;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  const onEventClicked = () => {
    navigation.navigate("BookScreen");
  };

  const onLocationClicked = ()=>{
    navigation.navigate("NearYouList")
  }

  return (
    
    <StyledView className="flex flex-col h-screen pt-14">
      <StyledView className="mx-5">
        <Text className="text-3xl font-semibold text-blue-900">
          {auth.currentUser?.displayName}
        </Text>
      </StyledView>
      <StyledView className="flex border-2 border-double border-orange-300"></StyledView>
      <TouchableOpacity className="flex flex-row mx-8 mt-10 bg-slate-100   rounded-lg py-4 pr-4 pl-2" onPress={onLocationClicked}><Image source={LocationPic} className="h-8 w-8"/><Text className="font-poppins text-right text-xl text-orange-300 font-italic font-semibold border-1 border-black-500 pl-4">Find oplevelser tæt på dig</Text><Image source={ArrowPic} className="h-2 w-6 py-4 px-2"/></TouchableOpacity>
     
    </StyledView>
  );
  
}

function SettingsScreen() {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        navigation.replace("SignInScreen");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <StyledView className="flex flex-col h-screen pt-14">
      <Text variant="headlineMedium">Settings!</Text>
      <TouchableOpacity className="h-12 w-full rounded-full bg-red-400"
        onPress={handleSignOut}>
        <Text className="m-3 text-white text-center">Logout</Text>
      </TouchableOpacity>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
