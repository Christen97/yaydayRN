import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Button,
} from "react-native";
import React from "react";
import Logo from "../../../assets/images/Male_user.png";
import CustomButton from "../../components/CustomButton";
import MenuBar from "../../components/MenuBar";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onExplorePressed = () => {
    navigation.navigate("ExploreScreen");
  };

  return <MenuBar></MenuBar>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //alignItems: "center",
    //justifyContent: "center",
    padding: 10,
  },
  mb: {
    backgroundColor: "white",
  },
});

export default HomeScreen;
