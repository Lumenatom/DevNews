import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { AllArticlesScreen } from "./AllArticlesScreen";
import { AllNewsScreen } from "./AllNewsScreen";
import { PageArticleScreen } from "./PageArticleScreen";
import { PageNewsScreen } from "./PageNewsScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer style={styles.navigation}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="AllArticlesScreen"
          component={AllArticlesScreen}
          options={{ title: "Articles" }}
        />
        <Stack.Screen
          name="AllNewsScreen"
          component={AllNewsScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="PageArticleScreen"
          component={PageArticleScreen}
          options={{ title: "Article" }}
        />
        <Stack.Screen
          name="PageNewsScreen"
          component={PageNewsScreen}
          options={{ title: "News" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigation: {
    marginTop: 100,
  },
});
