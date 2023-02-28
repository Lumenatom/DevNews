import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../CONSTANS";

export const NewsBlock = () => {
  return (
    <View style={styles.wrapperNews}>
      <View style={styles.header}>
        <Text style={styles.title}>News</Text>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: "https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png",
            }}
          />
          <Text style={styles.description}>
            React Native: The Future of Mobile App Development
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: "https://dan-it.com.ua/wp-content/uploads/2019/01/javascript.png",
            }}
          />
          <Text style={styles.description}>
            Keeping Up with the Latest Trends in JavaScript Development
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png",
            }}
          />
          <Text style={styles.description}>
            Frontend Development: Tips and Best Practices for Building Modern
            Web Applications
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: "https://dan-it.com.ua/wp-content/uploads/2019/01/javascript.png",
            }}
          />
          <Text style={styles.description}>
            Keeping Up with the Latest Trends in JavaScript Development
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.wrapperButton}>
        <View style={styles.buttonMore}>
          <Text style={styles.titleButton}>More news!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperNews: {
    marginBottom: 30,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 55,
    paddingVertical: 10,
    margin: 10,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: 600,
    color: COLORS.white,
  },
  itemWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    rowGap: 15,
    marginHorizontal: 5,
  },
  item: {
    height: 280,
    width: "47%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    overflow: "hidden",
    borderWidth: 0.1,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    height: 170,
    width: "100%",
    resizeMode: "cover",
    borderRadius: SIZES.radius,
  },
  description: {
    fontSize: SIZES.h3,
    margin: 10,
    fontWeight: 600,
  },
  wrapperButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonMore: {
    justifyContent: "center",
    height: 50,
    width: 200,
    alignItems: "center",
    margin: 10,
    backgroundColor: COLORS.green,
    borderRadius: SIZES.radius,
  },
  titleButton: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: 600,
  },
});
