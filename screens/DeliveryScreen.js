import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectResturant } from "../Features/resturantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);

  return (
    <View className="bg-[#fff0CC] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            className=""
            onPress={() => navigation.navigate("Home")}
          >
            <XMarkIcon size={30} color="black" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">40-45 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar
            progress={0.3}
            size={30}
            color="#00CCBB"
            indeterminate={true}
          />
          <Text className="mt-3 text-gray-500">
            Your Order at {resturant.title} is being Prepared
          </Text>
        </View>
      </SafeAreaView>

      <Animatable.Image
        source={require("../assets/order2.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96 my-8"
      />
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-36 mt-12">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text
            className="text-lg"
          >
            Nilamadhab Senapti
          </Text>
          <Text
            className="text-gray-400"
          >
            Your Rider
          </Text>
        </View>
        <Text className=" text-[#00CCBB] mr-12 text-xl font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
