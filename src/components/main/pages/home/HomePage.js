import { React, useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ButtonFilled from "../../../../custom_components/buttons/ButtonFilled";
import { Context as AuthContext } from "../../../auth/AuthContext";
import { theme } from "../../../../myStyle";
import axios from "axios";
import Slide from "./Slide";
import MainContent from "./MainContent";

export default function HomePage() {
  const { state } = useContext(AuthContext);
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Get from our API.
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos") //
    //   .then((result) => {
    //     setMovies(result.data);
    //   })
    //   .then(setIsLoading(false));
  }, []);

  // if (isLoading) {
  //   return <ActivityIndicator size="large" color={theme.colors.primary} />;
  // }
  return (
    <SafeAreaView>
      <SectionList
        contentContainerStyle={{ padding: 10 }}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={{ fontWeight: "bold", fontSize: 18, padding: 4 }}>
              {section.title}
            </Text>
            {section.horizontal ? (
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <Slide item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return <MainContent item={item} />;
        }}
      />
    </SafeAreaView>
  );
}

const SECTIONS = [
  {
    title: "Made for you",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    title: "Punk and hardcore",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1011/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1012/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1016/200",
      },
    ],
  },
  {
    title: "Based on your recent listening",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1020/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1024/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1027/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1035/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1038/200",
      },
    ],
  },
];
