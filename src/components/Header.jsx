import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Brak"];

export default function Header({ currenTime, setCurrentTime, setTime }) {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={style.viewContenedor}>
      {options.map((option, i) => (
        <TouchableOpacity
          key={i}
          style={[
            style.itemStyle,
            currenTime !== i && { borderColor: "transparent" },
          ]}
          onPress={() => handlePress(i)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  viewContenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
  },
  itemStyle: {
    flexGrow: 1,
    padding: 5,
    marginVertical: 20,
    alignItems: "center",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
});
