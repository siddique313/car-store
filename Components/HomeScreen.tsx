import { SafeAreaView, StyleSheet, View } from "react-native";
import DataFetching from "@/Components/DataFetching";
import LogoAndIcons from "@/Components/LogoAndIcons";
import SearchInput from "@/Components/SearchInput";
import CarouselScreen from "@/Components/CarouselScreen";
import RecommendedSeeAll from "@/Components/RemandedSeeAll";

export default function HomeScreen() {
  // return <CarFeature />;
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <LogoAndIcons />
        <SearchInput />
        <CarouselScreen />
        <RecommendedSeeAll />
        <DataFetching />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: { gap: 20, position: "relative", marginHorizontal: 18 },
});
