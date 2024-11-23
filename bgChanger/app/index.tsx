import { useState } from "react";
import { Text, View, StatusBar, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const [randomColor,setRandomColor] = useState("#ffffff");

  const generateColor = ()=>{
    const hexCode = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)];
      setRandomColor(color);
    }
  }
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity onPress={generateColor} >
          <View style={styles.actionbtn}>
            <Text style={styles.actionBtnTxt}>press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionbtn:{
    borderRadius: 12,
    backgroundColor:"#AE1438",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt:{
    fontSize:24,
    color:"#fff",
    textTransform:"uppercase",
  },
});