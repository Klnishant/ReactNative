import { Text,
         View,
         StatusBar,
         SafeAreaView,
         FlatList,
         StyleSheet,
         TextInput,
         Pressable} from "react-native";

import React, { useState } from "react";

import { currencyByRupee } from "./constants";
import CurrencyButton from "./components/CurrencyButton";
import Snackbar from "react-native-snackbar";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [targetValue,setTargetValue] = useState("");
  const [targetCurrency,setTargetCurrency] = useState("");

  const onPress = (targetValue:Currency) => {
    if(!inputValue){
      return (
        Snackbar.show({
          text: "Please enter a value",
          textColor: "#000000",
          backgroundColor: "#EA7773",
        })
      )
    }

    const input = parseFloat(inputValue);

    if (!isNaN(input)) {
      const convertedValue = input * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setTargetValue(result);
      setTargetCurrency(targetValue.name);
    }
    else{
      return Snackbar.show({
        text: "Please enter a valid number",
        textColor: "#000000",
        backgroundColor: "#F4BE2C",
      })
    }
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter amount in ₹"
              keyboardType="number-pad"
              style={styles.inputAmountField}
             />
          </View>
          {
            targetValue && (
              <Text style={styles.resultTxt}>{targetValue}</Text>
            )
          }
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={currencyByRupee}
            renderItem={({ item }) => (
              <Pressable onPress={() => onPress(item)} style={[styles.button,
                targetCurrency === item.name && styles.selected
              ]}>
                <CurrencyButton name={item.name} flag={item.flag} />
              </Pressable>
            )}
            keyExtractor={(item) => item.name}
            numColumns={3}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});