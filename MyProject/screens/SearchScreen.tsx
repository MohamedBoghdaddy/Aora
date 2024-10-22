import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const videos = [
    { id: "1", title: "AI Video 1" },
    { id: "2", title: "AI Video 2" },
    { id: "3", title: "AI Video 3" },
  ];

  // Filter videos based on the search query
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyledView className="flex-1 bg-white">
      {/* Search input */}
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 16,
          borderRadius: 4,
          borderColor: "#ccc",
        }}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Display filtered video list */}
      <FlatList
        data={filteredVideos}
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

export default SearchScreen;
