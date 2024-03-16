import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const image = {
  uri: "https://pics.craiyon.com/2023-07-20/f7be5f76944b45a087eac07804db0591.webp",
};

export default function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.input}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <TextInput placeholder="Search" placeholderTextColor="white" />
      </View>
      <FontAwesome name="commenting" size={27} color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
  },
  image: {
    marginLeft: 10,
    height: 45,
    width: 45,
    borderRadius: 50,
    overflow: "hidden",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    overflow: "hidden",
    width: 240,
  },
  icon: {
    padding: 10,
  },
});
