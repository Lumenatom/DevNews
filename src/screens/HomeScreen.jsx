import React from "react";
import { ScrollView } from "react-native";
import { NewsBlock } from "../components/NewsBlock";
import { ArticlesBlock } from "../components/ArticlesBlock";

export const HomeScreen = () => {
  return (
    <ScrollView>
      <NewsBlock />
      <ArticlesBlock />
    </ScrollView>
  );
};
