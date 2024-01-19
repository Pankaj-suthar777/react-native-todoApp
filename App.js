import { space } from "postcss/lib/list";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.textInput}
        ></TextInput>
        <Button title="Add Goal"></Button>
      </View>
      <View style={styles.goalList}>
        <Text>fff</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },

  goalList: {
    flex: 6,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
});
