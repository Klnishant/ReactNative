import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <View>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.elevatedCard]}>
                <Text>Card</Text>
            </View>
            <View style={[styles.card,styles.elevatedCard]}>
                <Text>Card</Text>
            </View>
            <View style={[styles.card,styles.elevatedCard]}>
                <Text>Card</Text>
            </View>
            <View style={[styles.card,styles.elevatedCard]}>
                <Text>Card</Text>
            </View>
            <View style={[styles.card,styles.elevatedCard]}>
                <Text>Card</Text>
            </View>
            <View style={[styles.card,styles.elevatedCard]}>
                <Text>Card</Text>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 30,
      padding:8,
      fontWeight:'bold'
    },
    container:{
      padding:8,
    },
    card: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height:100,
      width:100,
      borderRadius:10,
      margin:10,
    },
    elevatedCard: {
      backgroundColor: '#5DA3FA',
      elevation:4,
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowColor:'#333',
      shadowOpacity:0.3,
      shadowRadius:2
    },
})