import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
          <Text style={styles.headingText}>
            FlatCard
          </Text>
          <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
              <Text>
                Red
              </Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
              <Text>
                Green
              </Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
              <Text>
                Blue
              </Text>
            </View>
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
    container: {
      flex:1,
      flexDirection:'row',
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
    cardOne: {
      backgroundColor: '#EF5354'
    },
    cardTwo: {
      backgroundColor: '#50DBB4'
    },
    cardThree: {
      backgroundColor: '#5DA3FA'
    },
  })