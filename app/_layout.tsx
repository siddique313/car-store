import { SafeAreaView, StyleSheet, View } from "react-native";
import DataFetching from "@/Components/DataFetching";
import LogoAndIcons from "@/Components/LogoAndIcons";
import SearchInput from "@/Components/SearchInput";
import CarouselScreen from "@/Components/CarouselScreen";
import RecommendedSeeAll from "@/Components/RemandedSeeAll";

export default function RootLayout() {
  // return <CarFeature />;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <LogoAndIcons />
      <SearchInput />
      <CarouselScreen />
      <RecommendedSeeAll />
      <DataFetching />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: { marginHorizontal: 10, gap: 20, position: "relative" },
});
