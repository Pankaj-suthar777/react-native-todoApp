import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState([]);

  function submitGoal(text) {
    // setGoal((p) => [...p, inputText]);

    //flat list will look for key properti
    setGoal((p) => [
      ...p,
      {
        text: text,
        key: Math.random().toString(),
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={submitGoal}></GoalInput>
      <View style={styles.goalList}>
        <FlatList
          data={goal}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}></GoalItem>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalList: {
    flex: 6,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
