import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/YaydayLogo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { auth, app } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import tailwind from "twrnc";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }*/

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
    return unsubscribe;
  });

  const handleSignIn = async () => {
    console.log(email);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    //validate user

    navigation.navigate("HomeScreen");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <ScrollView showsVerticalIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          rules={{
            required: "Password is required",
          }}
          className="h-12 w-full bg-white rounded-3xl mb-4 p-3"
        />

        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters long",
            },
          }}
          className="h-12 w-full bg-white rounded-3xl mb-4 p-3"
        />

        <TouchableOpacity
          className="h-12 w-full rounded-full bg-red-400"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center m-3 font-bold">Sign In</Text>
        </TouchableOpacity>

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons/>

        <TouchableOpacity
          className="h-12 w-full rounded-full bg-blue-100"
          //onPress={() => onFacebookButtonPress().then(() => console.log("Signed in with Facebook"))}
          //onPress={signInWithFacebook}
        >
          <Text className="text-blue-500 text-center m-3 font-bold">Sign In with Facebook</Text>
        </TouchableOpacity>

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
