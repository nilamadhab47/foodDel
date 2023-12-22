import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Resturant from "./screens/Resturant";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PrepareOrder from "./screens/PrepareOrder";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Resturant" component={Resturant} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{presentation: "modal", headerShown:false}}/>
          <Stack.Screen name="PreparingOrder" component={PrepareOrder} options={{presentation: "fullScreenModal", headerShown:"false"}} />
          <Stack.Screen name="deliveryScreen" component={DeliveryScreen} options={{presentation: "fullScreenModal", headerShown:"false"}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
