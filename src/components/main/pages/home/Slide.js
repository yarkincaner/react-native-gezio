import { React, useState, useEffect } from "react";
import {
  ScrollView,
  FlatList,
  View,
  ImageBackground,
  Text,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { theme } from "../../../../myStyle";

const width = Dimensions.get("screen").width / 1.5;

export default function Slide(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <ImageBackground
        source={{ uri: props.item.uri }}
        borderRadius={12}
        style={{
          width: width,
          height: 150,
          margin: 4,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            alignItems: "center",
            padding: 4,
            borderBottomEndRadius: 12,
            borderBottomStartRadius: 12,
            backgroundColor: "rgba(52, 52, 52, 0.7)",
          }}
        >
          <Text style={{ color: theme.colors.background }}>
            {props.item.text}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
