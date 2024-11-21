import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { openURL } from 'expo-linking'

export default function ActionCard() {
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
            source={{
                uri:'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}
            style={styles.ImageCard}
         />
        <View style={styles.bodyContainer}>
            <Text>
                Just like every year, Javascript brings in new features. This year
                javascript is bringing 4 new features, which are almost in
                production rollout. I won't be wasting much more time and directly
                jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.cardFooter}>
            <TouchableOpacity onPress={()=>openURL('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openURL('https://www.instagram.com/kl_nishant/')}>
                <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
      padding:8,
      fontWeight:'bold'
    },
    card:{
        width:350,
        height:390,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowOpacity:0.4,
        shadowColor:'#333'
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#000',
        fontSize:30,
        fontWeight:'600',
    },
    ImageCard:{
        height:190,
    },
    bodyContainer:{
        padding:10,
    },
    cardFooter:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
    },
})