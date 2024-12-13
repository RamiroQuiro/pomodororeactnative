import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={style.container}>
      <Text style={style.text}>{formattedTime}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 20,
    width: "100%",
    justifyContent: "center",
    flex: 0.3,
    borderRadius: 15,
  },
  text: {
    fontSize: 80,
    color: "#333333",
    textAlign: "center",
    fontWeight: "bold",
  },
});
