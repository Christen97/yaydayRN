import React from "react";
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

const StyledView = styled(View);

const Tab = createBottomTabNavigator();

export default function MyComponent() {
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
  return (
    <StyledView className="flex flex-col h-screen pt-14">
      <StyledView className="mx-5">
        <Text className="text-3xl font-semibold text-blue-900">
          Email: {auth.currentUser?.email}
        </Text>
      </StyledView>
      <StyledView className="flex flex-col pt-10">
        <StyledView className="mx-5">
          <Text className="text-2xl text-gray-400">Trender</Text>
        </StyledView>
        <ScrollView
          className="flex flex-row pt-1"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            className="mx-1"
            source={{
              uri: "https://source.unsplash.com/random",
            }}
            style={tailwind`w-64 h-48 rounded-3xl`}
          />
          <Image
            className="mx-1"
            source={{
              uri: "https://source.unsplash.com/random",
            }}
            style={tailwind`w-64 h-48 rounded-3xl`}
          />
        </ScrollView>
        <StyledView className="m-5">
          <Text className="text-2xl text-gray-400">Vi anbefaler</Text>
        </StyledView>
        <ScrollView
          className="flex flex-col mx-5"
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={onEventClicked} className="flex flex-row h-40 w-full bg-white rounded-3xl mb-4">
            <Image
              className="m-4"
              source={{
                uri: "https://source.unsplash.com/random",
              }}
              style={tailwind`w-32 h-32 rounded-3xl`}
            />
            <StyledView>
              <StyledView>
                <Text className="text-xs text-gray-400 my-6">
                  Sep 22-31|12:00 - 24:00
                </Text>
              </StyledView>
              <StyledView>
                <Text className="text-lg text-black">Party Bowling</Text>
              </StyledView>
              <StyledView className="flex flex-row">
                <Text className="text-xs text-gray-400 my-6">
                  PartyBowlerne Odense
                </Text>
                <Text className="text-xs text-gray-400 my-6 text-right">
                  50 kr.
                </Text>
              </StyledView>
            </StyledView>
          </TouchableOpacity>
          <StyledView className="h-40 w-full bg-white rounded-3xl mb-4">
            <Image
              className="m-4"
              source={{
                uri: "https://source.unsplash.com/random",
              }}
              style={tailwind`w-32 h-32 rounded-3xl`}
            />
          </StyledView>
          <StyledView className="h-40 w-full bg-white rounded-3xl mb-4">
            <Text className="text-2xl text-gray-400">Vi anbefaler</Text>
          </StyledView>
        </ScrollView>
      </StyledView>
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
