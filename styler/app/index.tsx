import ElevatedCard from "@/components/ElevatedCard";
import FlatCard from "@/components/FlatCard";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
}
