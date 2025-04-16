import * as React from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
export default function CarouselScreen() {
  const width = Dimensions.get("window").width;

  // Data for carousel
  const picData = [
    { id: 1, url: require("../assets/images/car10.jpeg") },
    { id: 2, url: require("../assets/images/car2.jpeg") },
    { id: 3, url: require("../assets/images/car11.jpeg") },
    { id: 4, url: require("../assets/images/car10.jpeg") },
    { id: 5, url: require("../assets/images/car11.jpeg") },
    { id: 6, url: require("../assets/images/car10.jpeg") },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        loop
        showsPagination
        dotColor="rgba(255,255,255,0.5)"
        activeDotColor="rgb(0, 0, 0)"
        width={width}
        height={190}
      >
        {picData.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image style={styles.image} source={item.url} resizeMode="cover" />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
