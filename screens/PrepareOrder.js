import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PrepareOrder = () => {
    const navigation = useNavigation()


    useEffect(() => {
     setTimeout(()=> {
        navigation.navigate("deliveryScreen")
     }, 3000)
    }, [])



  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
       <Animatable.Image
       source={require("../assets/order1.gif")}
       animation="slideInUp"
       iterationCount={1}
       className="h-96 w-96"
       />

        <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
        >
            Looking for delivery Partner
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PrepareOrder