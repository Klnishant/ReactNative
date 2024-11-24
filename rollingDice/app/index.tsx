import { Text, View,Image,StyleSheet,Pressable, ImageSourcePropType } from "react-native";
import React, { useState } from "react";
import type {  PropsWithChildren } from "react";

import DiceOne from "@/assets/One.png";
import DiceTwo from "@/assets/Two.png";
import DiceThree from "@/assets/Three.png";
import DiceFour from "@/assets/Four.png";
import DiceFive from "@/assets/Five.png";
import DiceSix from "@/assets/Six.png";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";
type DiceProps = PropsWithChildren<{
  image: ImageSourcePropType;
}>;

const options={
  enablevibratefallback:true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ image }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={image} />
    </View>
  )
};

export default function Index() {
  const [imageUrl,setImageUrl] = useState<ImageSourcePropType>(DiceOne);
   const rollDiceOnTap = ()=>{
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    switch (randomNumber) {
      case 1:
        setImageUrl(DiceOne);
        break;
      case 2:
        setImageUrl(DiceTwo);
        break;
      case 3:
        setImageUrl(DiceThree);
        break;
      case 4:
        setImageUrl(DiceFour);
        break;
      case 5:
        setImageUrl(DiceFive);
        break;
      case 6:
        setImageUrl(DiceSix);
        break;
      default:
        setImageUrl(DiceOne);
        break;
   }
   ReactNativeHapticFeedback.trigger("impactLight",options);
  }
  return (
    <View style={styles.container}>
      <Dice image={imageUrl} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});