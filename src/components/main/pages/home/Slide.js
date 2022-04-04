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

const width = Dimensions.get("screen").width / 1.3;

export default function Slide(props) {
  return (
    <View>
      <ImageBackground
        source={{ uri: props.item.thumbnailUrl }}
        borderRadius={12}
        style={{
          width: width,
          height: 200,
          marginHorizontal: 4,
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
          <Text style={{ color: "white" }}>{props.item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
