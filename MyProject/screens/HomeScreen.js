import React from "react";
import { View, Text, FlatList } from "react-native";
import Animated from "react-native-reanimated";

const DATA = [
  /* Your Data Here */
];

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View>
            <Text>{item.title}</Text>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
