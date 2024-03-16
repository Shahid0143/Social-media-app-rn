import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const image = {
  uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-vDBFFrV46ytWj5tyD8dTsEfWTlblee1ei45aWHKxQ&s`,
};
export default function Posts() {
  return (
    <>
      <View style={styles.box}>
        <ImageBackground style={styles.img} source={image} />
        <View style={styles.txtshape}>
          <Text>Eleke Great (he/Him).2nd</Text>
          <Text>Senior python Developer at SkillSeeds||..</Text>
          <Text>
            6h . <AntDesign name="earth" size={12} color="black" />{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.concol}>
            <AntDesign name="addusergroup" size={15} color="black" />
            Connect
          </Text>
          <Text style={styles.txt}>Are you done learning react.js?</Text>
          <Text style={styles.txt1}>...see more</Text>
        </View>
      </View>
      <ImageBackground style={styles.cardimg} source={image} />
      <View style={styles.like}>
        <View style={styles.txtcenter}>
          <AntDesign name="like2" size={24} color="black" />
          <Text>Like</Text>
        </View>
        <View style={styles.txtcenter}>
          <FontAwesome name="comment-o" size={24} color="black" />
          <Text>Comment</Text>
        </View>
        <View style={styles.txtcenter}>
          <MaterialCommunityIcons name="repeat" size={24} color="black" />
          <Text>Repost</Text>
        </View>
        <View style={styles.txtcenter}>
          <Ionicons name="send-outline" size={24} color="black" />
          <Text>Send</Text>
        </View>
      </View>
      <View style={styles.footbox}>
        <ImageBackground style={styles.img1} source={image} />
        <View style={styles.txtcolor}>
          <Text>Shahid Raza (He/Him) . 1st</Text>
          <View style={styles.webbox}>
            <Text>started Web Dev traning at Acciojob |HTML|CSS|JAVA..</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: 15,
    marginLeft: 5,
    flexDirection: "row",
    gap: 10,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
    overflow: "hidden",
  },
  txtshape: {
    width: 200,
  },
  concol: {
    fontSize: 18,
    color: "blue",
    fontWeight: "500",
  },
  moretxt: {
    flexDirection: "column",
  },
  txt: {
    position: "absolute",
    left: -270,
    top: 100,
    width: 340,
    fontSize: 15,
  },
  txt1: {
    position: "absolute",
    top: 100,
    right: 28,
    fontSize: 16,
    color: "grey",
  },
  cardimg: {
    height: 300,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 100,
    marginLeft: 45,
  },
  card: {
    flex: 1,
  },
  like: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    position: "absolute",
    color: "blue",
    borderTopColor: "grey",
    borderTopWidth: 0.2,
    width: 400,
    bottom: 160,
  },
  txtcenter: {
    alignItems: "center",
  },
  img1: {
    marginBottom: 25,
    height: 60,
    width: 60,
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 5,
  },
  footbox: {
    flexDirection: "row",
    gap: 10,
  },
  webbox: {
    // flexDirection:'column',
    width: 300,
  },
  txtcolor: {
    backgroundColor: "#f6f0f0",
    borderRadius: 5,
    overflow: "hidden",
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
});
