import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Thumbnail, StyleGuide } from "../components";

export const examples = [
  {
    screen: "Tabbar",
    title: "Tabbar",
    source: require("../../assets/examples/accordion.png"),
  },
  {
    screen: "VoiceRecord",
    title: "Voice Record",
    source: require("../../assets/examples/angular-gradient.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background,
  },
  content: {
    paddingBottom: 32,
  },
});

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map((thumbnail) => (
        <Thumbnail
          key={thumbnail.screen}
          onPress={() => navigation.navigate(thumbnail.screen)}
          {...thumbnail}
        />
      ))}
    </ScrollView>
  );
};
