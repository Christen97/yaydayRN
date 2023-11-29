import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import Logo from "../../../assets/images/Male_user.png";
import { useNavigation } from "@react-navigation/native";

const ExploreScreen = () => {
  const navigation = useNavigation();

  const onFilterPressed = () => {
    navigation.navigate("FilterScreen");
  };

  const onBookPressed = () => {
    navigation.navigate("BookScreen");
  }

  return (
    <ScrollView>
      <Pressable onPress={onFilterPressed} style={styles.Button}>
        <Text style={styles.Text}>Filter</Text>
      </Pressable>
      <View style={styles.Container}>
        <View style={styles.IconContainer}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.Text}> Cocktail Night</Text>
        </View>
        <Text style={styles.Description}>
          DOKK5000 byder på kæmpe kulturchok, når 36 nye drinks fra verden over
          skal smages
        </Text>
        <View style={styles.ButtonContainer}>
          <Pressable onPress={""} style={styles.LeftButton}>
            <Text style={styles.Text}>See more</Text>
          </Pressable>
          <Pressable onPress={onBookPressed} style={styles.RightButton}>
            <Text style={styles.Text}>Book</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Container}>
        <Text style={styles.Text}>Filter</Text>
        <Text style={styles.Description}>
          DOKK5000 byder på kæmpe kulturchok, når 36 nye drinks fra verden over
          skal smages
        </Text>
        <View style={styles.ButtonContainer}>
          <Pressable onPress={""} style={styles.LeftButton}>
            <Text style={styles.Text}>See more</Text>
          </Pressable>
          <Pressable onPress={""} style={styles.RightButton}>
            <Text style={styles.Text}>Book</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Container}>
        <Text style={styles.Text}>Filter</Text>
        <Text style={styles.Description}>
          DOKK5000 byder på kæmpe kulturchok, når 36 nye drinks fra verden over
          skal smages
        </Text>
        <View style={styles.ButtonContainer}>
          <Pressable onPress={""} style={styles.LeftButton}>
            <Text style={styles.Text}>See more</Text>
          </Pressable>
          <Pressable onPress={""} style={styles.RightButton}>
            <Text style={styles.Text}>Book</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Container}>
        <Text style={styles.Text}>Filter</Text>
        <Text style={styles.Description}>
          DOKK5000 byder på kæmpe kulturchok, når 36 nye drinks fra verden over
          skal smages
        </Text>
        <View style={styles.ButtonContainer}>
          <Pressable onPress={""} style={styles.LeftButton}>
            <Text style={styles.Text}>See more</Text>
          </Pressable>
          <Pressable onPress={""} style={styles.RightButton}>
            <Text style={styles.Text}>Book</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: "30%",

    padding: 15,
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 40,

    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
  LeftButton: {
    width: "50%",

    padding: 15,
    marginVertical: 10,
    marginHorizontal: 0,

    alignItems: "center",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "pink",
    borderWidth: 1,
    backgroundColor: "white",
  },
  RightButton: {
    width: "50%",

    padding: 15,
    marginVertical: 10,
    marginHorizontal: 0,

    alignItems: "center",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: "pink",
    borderWidth: 1,
    backgroundColor: "white",
  },
  Text: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  Description: {
    marginVertical: 5,
    color: "black",
    fontSize: 15,
  },
  Container: {
    backgroundColor: "white",
    height: 200,
    padding: 20,
    width: "80%",
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 30,
  },
  IconContainer: {
    flexDirection: "row",
  },
  ButtonContainer: {
    flexDirection: "row",
  },
  logo: {
    width: "100%",
    maxWidth: 30,
    maxHeight: 30,
  },
});

export default ExploreScreen;
