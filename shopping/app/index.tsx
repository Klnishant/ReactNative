import { Text, View } from "react-native";

//navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "@/screens/Home";
import Details from "@/screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
}

const stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={Home} options={{title: 'Trending Products'}} />
      <stack.Screen name="Details" component={Details} options={{title: 'Product Details'}} />
    </stack.Navigator>
  );
}
