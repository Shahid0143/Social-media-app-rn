import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.icontxt}>
        <FontAwesome5 name="home" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icontxt}>
        <Entypo name="network" size={24} color="black" />
        <Text>My Network</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icontxt}>
        <Entypo name="add-to-list" size={24} color="black" />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icontxt}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icontxt}>
        <Ionicons name="bag" size={24} color="black" />
        <Text>Jobs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 3,
  },
  icontxt: {
    alignItems: "center",
  },
});
