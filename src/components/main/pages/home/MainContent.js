import React from "react";
import { View, Image, Text, Dimensions } from "react-native";

export default function MainContent(props) {
  return (
    <View style={{ padding: 4 }}>
      <Image
        source={{ uri: props.item.uri }}
        style={{
          height: 250,
          borderRadius: 4,
        }}
      />
      <Text style={{ color: "black", padding: 4 }}>{props.item.text}</Text>
    </View>
  );
}
