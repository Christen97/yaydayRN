import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const SignUpScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm();

  const pwd = watch("password");

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmailScreen");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  const onTermsOfUsePressed = () => {
    navigation.navigate("ConfirmEmailScreen");
  };

  const onPrivacyPressed = () => {
    navigation.navigate("ConfirmEmailScreen");
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    console.log(email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });
      console.log(userCredential.user);
      console.log(username)
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <ScrollView showsVerticalIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <TextInput
          name="username"
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          className="h-12 w-full bg-white rounded-3xl my-3 p-3"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be minimum 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Username should be minimum 20 characters long",
            },
          }}
        />

        <TextInput
          name="email"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          className="h-12 w-full bg-white rounded-3xl my-3 p-3"
          rules={{
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            required: "Email is required",
          }}
        />

        <TextInput
          name="password"
          placeholder="Password"
          secureTextEntry
          className="h-12 w-full bg-white rounded-3xl my-3 p-3"
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters long",
            },
          }}
        />

        <TextInput
          name="passwordRepeat"
          placeholder="Repeat password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          className="h-12 w-full bg-white rounded-3xl my-3 p-3"
          rules={{
            required: "Password is required",
            validate: (value) => value === pwd || "Password do not match",
          }}
        />

        <CustomButton text="Register" onPress={handleSubmit(handleSignUp)} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
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
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
