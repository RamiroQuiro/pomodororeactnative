import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useState, useEffect } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
export default function App() {
  const [isWorking, setIsWorking] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2", "#f7dc6f"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((state) => !state);
      console.log(isWorking)
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleClick = () => {
    console.log("hola");
  };

  const hanbdleStop = () => {
    setIsActive((state) => !state);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={{ paddingTop: Platform.OS === "android" && 50, flex: 1 }}>
        <Text style={styles.text}>Pomoro</Text>
        <Header
          setCurrentTime={setCurrentTime}
          setTime={setTime}
          currenTime={currentTime}
        />

        <Timer time={time} />

        <TouchableOpacity onPress={hanbdleStop}>
          <Text style={styles.buttonStart}>{!isActive ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#FDEDE6",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonStart: {
    textAlign: "center",
    padding: 15,
    borderRadius: 20,
    marginVertical: 15,
    fontWeight: "bold",
    backgroundColor: "#0e0e0e",
    color: "white",
    fontSize: 20,
  },
});
