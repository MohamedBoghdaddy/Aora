import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

type OnboardingScreenProps = {
  navigation: NavigationProp<any>;
};

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  return (
    <StyledView className="flex-1 justify-center items-center bg-white">
      <StyledText className="text-3xl font-bold mb-4">
        Welcome to Aora
      </StyledText>
      <StyledText className="text-base mb-8">
        The best place to share and view AI videos!
      </StyledText>
      <Button title="Get Started" onPress={() => navigation.navigate("Auth")} />
    </StyledView>
  );
};

export default OnboardingScreen;
