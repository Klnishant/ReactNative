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
      <SafeAreaView>
        <View>
          <Text>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={values => generatePasswordString(Number(values.passwordLength))}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View>
                  <View>
                    <Text>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text>{errors.passwordLength}</Text>
                    )}
                  </View>
                    <TextInput
                      onChangeText={handleChange('passwordLength')}
                      value={values.passwordLength}
                      placeholder="Ex: 8"
                      keyboardType="numeric"
                     />
                </View>
                <View>
                  <Text>Include Lowercase</Text>
                  <BouncyCheckBox
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="green"
                   />
                </View>
                <View>
                  <Text>Include Uppercase</Text>
                  <BouncyCheckBox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="green"
                   />
                </View>
                <View>
                  <Text>Include Numbers</Text>
                  <BouncyCheckBox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="green"
                   />
                </View>
                <View>
                  <Text>Include Symbols</Text>
                  <BouncyCheckBox
                    isChecked={symbols}
                    onPress={() => setsymbols(!symbols)}
                    fillColor="green"
                   />
                </View>
                <View>
                  <TouchableOpacity disabled={!isValid}
                    onPress={()=>handleSubmit()}
                  >
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity disabled={!isPasswordGenerated}
                    onPress={()=>{
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPasswordGenerated && (
                  <View>
                    <Text>Result:</Text>
                    <Text>Long press to copy</Text>
                    <Text selectable={true}>{password}</Text>
                  </View>
                )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}