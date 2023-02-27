import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SIZES } from "../CONSTANS";

export const HomeScreen = () => {
  return (
    <View style={styles.homeWrapper}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    padding: SIZES.padding,
  },
});
