import React from 'react'
import type { PropsWithChildren } from 'react'
import {View,Text,StyleSheet} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


const CurrencyButton = (props:CurrencyButtonProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
    },
    flag: {
        fontSize: 28,
        color:'#ffffff',
        marginBottom:4,
    },
    country:{
        fontSize: 16,
        color:"#2d3436",
    }
})


export default CurrencyButton