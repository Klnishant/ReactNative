import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <Image
            source={{
                uri:'https://blissfulbihar.com/wp-content/uploads/2023/07/patna-buddha-smriti-park.webp',
            }}
            style={styles.cardImage}
         />
         <View style={styles.cardBody}>
            <Text style={styles.title}>Karuna Stupa</Text>
            <Text style={styles.label}>Patliputra,Patna</Text>
            <Text style={styles.description}>The stupa enshrining the holy relics of the Sakyamuni Buddha, is the focal point of the Buddha Smriti Park.</Text>
            <Text style={styles.footer}>12 min away</Text>
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
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    label:{
        fontSize:14,
        marginBottom:6,
    },
    description:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    footer:{
        color:'#000000',
    },
})