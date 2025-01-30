import * as React from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function CarouselScreen() {
  const width = Dimensions.get("window").width;

  // Data for carousel
  const picData = [
    { id: 1, url: require("../assets/images/car13.jpeg") },
    { id: 2, url: require("../assets/images/car2.jpeg") },
    { id: 3, url: require("../assets/images/car11.jpeg") },
    { id: 4, url: require("../assets/images/car10.jpeg") },
    { id: 5, url: require("../assets/images/car11.jpeg") },
    { id: 6, url: require("../assets/images/car10.jpeg") },
  ];

  return (
    <View style={{ height: 180, alignItems: "center" }}>
      <Carousel
        autoPlayInterval={3000}
        loop={true}
        width={width}
        height={190}
        autoPlay={true}
        mode="parallax"
        data={picData}
        renderItem={({ item }: any) => (
          <View key={item.id}>
            <Image
              style={{ width: "100%", height: 200, borderRadius: 20 }}
              source={item.url}
            />
          </View>
        )}
        snapEnabled
        enabled
        overscrollEnabled
        autoFillData
      />
    </View>
  );
}
