import React from "react";
import { View, Image, Text } from "react-native";
import { theme } from "../../../../myStyle";

export default function MainContent(props) {
  return (
    <View style={{ padding: 4, alignItems: "center" }}>
      <Image
        source={{ uri: props.item.uri }}
        style={{
          width: "92%",
          height: 200,
          borderRadius: 4,
        }}
      />
      <Text style={{ color: theme.colors.foreground, padding: 4 }}>
        {props.item.text}
      </Text>
    </View>
  );
}
