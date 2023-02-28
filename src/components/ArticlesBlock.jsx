import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../CONSTANS";

export const ArticlesBlock = () => {
  return (
    <View style={styles.wrapperNews}>
      <View style={styles.header}>
        <Text style={styles.title}>Articles</Text>
      </View>
      <View style={styles.item}>
        <Text>1sdf2</Text>
      </View>
      <View style={styles.item}>
        <Text>sdf12</Text>
      </View>
      <View style={styles.item}>
        <Text>1sdf2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperNews: {},
  header: {
    backgroundColor: COLORS.blue,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 600,
    color: COLORS.white,
  },
  item: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
});
