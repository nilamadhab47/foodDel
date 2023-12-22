import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" bg-white pt-5">
      <View className="flex-row pb-3 items-start mx-4 space-x-2">
        <Image
          source={{
            uri: "https://wallpapers.com/images/high/cool-profile-picture-awled9dwo4qq2yv2.webp",
          }}
          className=" h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className=" font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className=" font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className=" flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#00CCBB" />
          <TextInput
            placeholder="Resturant and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />

      </View>
      <ScrollView>
        <Categories />

        <FeaturedRow
        id="123"
        title="Featured"
        description="Paid Placements From our Partners"
        
        />
        <FeaturedRow
        id="1234"
        title="Tasty Discounts"
        description="Everyone enjoying these juicy discount"
        
        />
        <FeaturedRow
        id="12345"
        title="Offers near you!"
        description="Support your local resturant tonight"
        
        />
      </ScrollView>
    </SafeAreaView>
  );
}
