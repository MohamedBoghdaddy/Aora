import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const videos = [
  { id: "1", title: "AI Video 1" },
  { id: "2", title: "AI Video 2" },
  { id: "3", title: "AI Video 3" },
];

const HomeScreen = () => {
  return (
    <StyledView className="flex-1 bg-white">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StyledView className="p-4">
            <StyledText className="text-lg">{item.title}</StyledText>
          </StyledView>
        )}
      />
    </StyledView>
  );
};

export default HomeScreen;
