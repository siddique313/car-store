import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import CareDetailModal from "./CareDetailModal";

export const CardItem = ({ item, index }: any) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, []);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={[
          {
            opacity: opacityValue,
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>⭐ {item.rating || 4.5}</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
                {item.name}
              </Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>Rs: {item.price}</Text>
                {item.originalPrice && (
                  <Text style={styles.originalPrice}>
                    Rs: {item.originalPrice}
                  </Text>
                )}
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>

      {/* Modal for showing car details */}
      <CareDetailModal
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: "#f5f5f5",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: 175,
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 180, // Maintain aspect ratio
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ratingBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#333",
  },
  textContainer: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    height: 36, // Fixed height for 2 lines
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2e86de",
  },
  originalPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
  addButton: {
    backgroundColor: "#2e86de",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
