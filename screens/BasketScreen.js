import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from '../Features/resturantSlice';
import { removeFromBasket, selectBasketItems, seletBasketTotal } from '../Features/basketSlics';
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(seletBasketTotal)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useMemo(() => {
    const groupedItems = items.reduce((results,item)=> {
        (results[item.id]= results[item.id] || []).push(item)
        return results
    }, {})
    setGroupedItemsInBasket(groupedItems)
    },[items])
console.log(items)
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-gray-400 text-center">{resturant.title}</Text>
                </View>
                <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon color="#00CCBB" height={50} width={50} />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image
                source={{
                    uri: 'http:/links.papareact.com/wru'
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <Text className=" flex-1 text-black">Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#0CB]" >Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className="divide-y divide-gray-200">
                {Object.entries(groupedItemsInBasket).map(([key, item])=> (
                    <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text>{item.length}x</Text>
                        <Image
                        source={{
                            uri: item[0]?.images
                        }}
                        className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">{items[0]?.name}</Text>

                        <Text className="text-gray-600">
                            <Currency quantity={items[0]?.price * 83.18} currency='INR' />
                        </Text>


                        <TouchableOpacity>
                            <Text className="text-[#00CCBB] text-xs"
                            onPress={()=> dispatch(removeFromBasket({id: key}))}
                            >
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>


            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={basketTotal * 83.18} currency='INR' />
                    </Text>
                </View>


                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Deliver fee</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={30} currency='INR' />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text>Order Total</Text>
                    <Text className="font-extrabold">
                        <Currency quantity={(basketTotal * 83.18) + 30} currency='INR' />
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("PreparingOrder")} className="rounded-lg bg-[#00CCBB] p-4">
                    <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default BasketScreen