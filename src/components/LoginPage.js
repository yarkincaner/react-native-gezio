import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ButtonTransparent from "../custom_components/buttons/ButtonTransparent";
import ButtonFilled from "../custom_components/buttons/ButtonFilled";
import { theme, darkTheme } from "../myStyle";
import MyInput from "../custom_components/MyInput";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

import { AuthContext } from "./auth/context";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signUp = () => {
    navigation.navigate("RegisterPage");
  };

  const { login } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Animatable.Text animation="pulse" duration={1500} style={styles.title}>
        Gezio
      </Animatable.Text>

      <View style={styles.inputContainer}>
        <View style={{ marginBottom: 8 }}>
          <MyInput
            placeHolder="Email"
            keyboardType="email-address"
            onChangeText={(val) => textInputChange(val)}
            iconName="mail"
            textInputChange={data.check_textInputChange}
          />
        </View>
        <View>
          <MyInput
            placeHolder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            iconName="lock"
            onChangeText={(val) => handlePasswordChange(val)}
            visibility={updateSecureTextEntry}
          />
        </View>
        <Text
          style={{ textAlign: "right", padding: 8, color: "grey" }}
          //onPress={() => navigation.navigate("ForgetPasswordScreen")}
        >
          Forget Password? Click here
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonTransparent onPress={login} title="login" />
        <Text style={styles.text}>Or</Text>
        <ButtonFilled onPress={signUp} title="sign up" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.primary,
    fontSize: 48,
    padding: 24,
  },
  inputContainer: {
    paddingTop: 4,
    paddingBottom: 16,
    width: "75%",
  },
  buttonContainer: {
    paddingVertical: 8,
    width: "75%",
    textAlign: "center",
  },
  text: {
    color: theme.colors.foreground,
    fontSize: 15,
    padding: 8,
    textAlign: "center",
  },
});
