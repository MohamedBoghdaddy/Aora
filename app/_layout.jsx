import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import "../";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
