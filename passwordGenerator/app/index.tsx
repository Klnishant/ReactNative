import { Text, View,SafeAreaView,ScrollView,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import * as yup from 'yup';
import { Formik } from "formik";
import react, { useState } from "react";
import BouncyCheckBox from "react-native-bouncy-checkbox";

const passwordSchema = yup.object().shape({
  passwordLength: yup.number()
  .min(4, 'passwordLength should be at least 4')
  .max(16, 'passwordLength should be at most 16')
  .required('passwordLength is required'),
})
export default function Index() {

  const [password,setPassword] = useState('');
  const [isPasswordGenerated,setIsPasswordGenerated] = useState(false);

  const [lowercase,setLowercase] = useState(true);
  const [uppercase,setUppercase] = useState(false);
  const [numbers,setNumbers] = useState(false);
  const [symbols,setsymbols] = useState(false);

  const generatePasswordString = (passwordLength:number) => {
    const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersString = '0123456789';
    const symbolsString = '!@#$%^&*()_+';
    let passwordString = '';
    if(lowercase) passwordString += lowercaseString;
    if(uppercase) passwordString += uppercaseString;
    if(numbers) passwordString += numbersString;
    if(symbols) passwordString += symbolsString;

    const passwordResult = createPassword(passwordString,passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (characters:string,passwordLength:number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setsymbols(false);
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={values => {generatePasswordString(Number(values.passwordLength))}}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                    <TextInput
                      onChangeText={handleChange('passwordLength')}
                      value={values.passwordLength}
                      placeholder="Ex: 8"
                      keyboardType="numeric"
                      style={styles.inputStyle}
                     />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckBox
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="green"
                   />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckBox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="green"
                   />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckBox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="green"
                   />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckBox
                    isChecked={symbols}
                    onPress={() => setsymbols(!symbols)}
                    fillColor="green"
                   />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity disabled={!isValid}
                    onPress={()=>handleSubmit()}
                    style={styles.primaryBtn}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity disabled={!isPasswordGenerated}
                    onPress={()=>{
                      handleReset();
                      resetPasswordState();
                    }}
                    style={styles.secondaryBtn}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPasswordGenerated && (
                  <View style={[styles.card,styles.cardElevated]}>
                    <Text style={styles.subTitle}>Result:</Text>
                    <Text style={styles.description}>Long press to copy</Text>
                    <Text style={styles.generatedPassword} selectable={true}>{password}</Text>
                  </View>
                )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});