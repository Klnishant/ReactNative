import { Text, View } from "react-native";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "../screens/Home";
import Details from "../screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
}

const stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} options={{title: "Trending Product"}} />
        <stack.Screen name="Details" component={Details} options={{title: "Product Details"}} />
      </stack.Navigator>
  );
}
