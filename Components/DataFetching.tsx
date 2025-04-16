import { View, ScrollView, StyleSheet } from "react-native";
import { data } from "./data";
import { CardItem } from "./carCardITem";

export default function DataFetching() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.grid}>
        {data.map((item, idx) => (
          <CardItem key={idx} item={item} index={idx} />
        ))}
      </View>
    </ScrollView>
  );
}

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
});
