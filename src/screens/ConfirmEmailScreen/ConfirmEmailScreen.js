import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from "react-hook-form";

const ConfirmEmailScreen = () => {

  const {
    control,
    handleSubmit
  } = useForm();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignInScreen');
  };

  const onResendPressed = () => {
    console.warn("onResendPressed");
  };

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
  };


  return (
    <ScrollView showsVerticalIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{ required: "Confirmation code is required" }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  }
});

export default ConfirmEmailScreen;
