import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { account } from "../services/api"; // API module for handling authentication

import { NavigationProp } from "@react-navigation/native";

type ScreenProps = {
  navigation: NavigationProp<any>; // You can replace 'any' with your defined stack type
};

const LoginScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Call the API to log the user in
      const response = await account.login(email, password); // Use the login function from api.tsx
      console.log("Logged in:", response);
      // Navigate to Home screen on successful login
      navigation.navigate("Home");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />

      {/* Sign Up Link */}
      <Text style={styles.linkText}>Don't have an account?</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

// Styles for the login screen components
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
    margin: 10,
    width: "80%",
    borderRadius: 5,
  },
  linkText: {
    marginTop: 20,
    fontSize: 16,
    color: "blue",
  },
});

export default LoginScreen;
