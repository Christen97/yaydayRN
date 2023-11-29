import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";
import backwardIcon from "../../../assets/images/arrow_left.png";
import favoriteIcon from "../../../assets/images/favorite_icon.png";
import CustomButton from "../../components/CustomButton";

import { styled } from "nativewind";

const StyledView = styled(View);

const BookScreen = () => {
  const navigation = useNavigation();
  const onBackClicked = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex flex-col justify-between">
        <StyledView className="flex flex-row px-6 pt-14 justify-between">
          <TouchableOpacity onEventClicked={onBackClicked}>
            <Image
              className="mx-1 h-8 w-8"
              source={backwardIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-lg text-black-400">Details</Text>
          <TouchableOpacity className="" onEventClicked={onBackClicked}>
            <Image
              className="mx-1 h-8 w-8"
              source={favoriteIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </StyledView>
        <StyledView className="p-6 pt-10">
          <Text className="text-2xl text-black-400">Kør Gokart i Odense</Text>
        </StyledView>
        <StyledView className="">
          <Image
            className="mx-1 max-w-max h-48 rounded-2xl"
            source={{
              uri: "https://source.unsplash.com/random",
            }}
          />
        </StyledView>
        <StyledView className="px-6 pt-10">
          <Text className="text-2xl text-black-400">Info</Text>
        </StyledView>
        <StyledView className="flex flex-row justify-between px-6">
          <Text className="text-base text-gray-400">OdenseGokart 12</Text>
          <Text className="text-base text-gray-400">17 august 2023, 15:20</Text>
        </StyledView>
        <StyledView className="p-6 pt-10">
          <Text className="text-base text-black-400">
            Speedrace hos Gokart or GoHome - vores tilbud til alle studerende.
            Kridt hjulene og tryk på speederen til kun kr. 275,-. HUSK at
            medbringe gyldigt studiekortet i Gokart hallen!
            Speedrace hos Gokart or GoHome - vores tilbud til alle studerende.
            Kridt hjulene og tryk på speederen til kun kr. 275,-. HUSK at
            medbringe gyldigt studiekortet i Gokart hallen!
          </Text>
        </StyledView>
        <StyledView className="flex flex-col fixed">
          <Text className="text-base text-black-400">275</Text>
          <TouchableOpacity
            className="h-12 w-full rounded-full bg-red-400"
            onPress={onBackClicked}
          >
            <Text className="text-white text-center m-3 font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="h-12 w-full rounded-full bg-red-400"
            onPress={onBackClicked}
          >
            <Text className="text-white text-center m-3 font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
        </StyledView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    fontSize: 40,
  },
});

export default BookScreen;
