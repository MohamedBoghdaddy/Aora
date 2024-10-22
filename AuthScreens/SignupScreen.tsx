import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { styled } from "nativewind"; // If using NativeWind for styling
import { account } from "../services/api"; // Ensure this file exists and is correct
import { NavigationProp } from "@react-navigation/native";

type ScreenProps = {
  navigation: NavigationProp<any>; // You can replace 'any' with your defined stack type
};

const SignupScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await account.create(email, password);
      console.log("Signed up:", response);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.text}>Already have an account?</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

// Define styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "75%",
  },
  text: {
    marginTop: 10,
  },
});

export default SignupScreen;
