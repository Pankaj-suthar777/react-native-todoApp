import React from "react";

import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalText}>
      <Text style={styles.textOfGaol}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "salmon",
    marginBottom: 5,
  },
  textOfGaol: {
    color: "white",
  },
});
