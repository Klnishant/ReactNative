import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/app/index'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProp = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProp) => {
    const {productId} = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title='Go Back'
        onPress={()=> navigation.goBack()}
       />
        <Button
            title='Go Back To First Screen'
            onPress={()=> navigation.popToTop()}
         />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'#000000'
    }
})

export default Details