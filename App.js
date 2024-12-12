import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useEffect, useState } from "react";
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  useEffect(() => {}, []);

  const handleClick = () => {
    console.log("hola");
  };
  const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2", "#f7dc6f"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.text}>Pomoro</Text>
        <Text style={styles.text}>{time}</Text>
        <Button title="My Button" onPress={handleClick} />
        <StatusBar style="auto" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FDEDE6",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
