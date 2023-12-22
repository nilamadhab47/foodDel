import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../Features/basketSlics";

const DishRow = ({ id, name, description, price, images }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, images }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  const priceInRupees = price * 83.182;

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={priceInRupees} currency="INR" />
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: images,
              }}
              className="h-20 w-20 bg-gray-200 p-4"
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View>
          <View className="flex-row items-center space-x-2 my-3">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <MinusCircleIcon color={`${items.length > 0 ? "#00CCBB" : "gray"}`} size={40} />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
