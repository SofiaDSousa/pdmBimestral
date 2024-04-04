import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('./assets/fundo.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Log into{'\n'}your account</Text>
          <TextInput
            style={styles.input}
            placeholder="Username/Email"
            keyboardType="email-address"
            placeholderTextColor="white"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="white"
            />
            <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
              <Text style={styles.forgotPasswordText}>Forgot?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox}>
              {rememberMe && <Text style={styles.checkboxMark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonFacebook]}>
            <Image source={require('./assets/facebook.png')} style={styles.buttonImage} /> 
            <Text style={[styles.buttonText, { color: 'black' }]}>Log in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Sign up")}>
            <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingLeft: 10,
    color: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 12,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 8,
  },
  checkboxMark: {
    fontSize: 16,
    color: 'black',
  },
  rememberMeText: {
    color:  'white',
    fontFamily: 'helvetica' ,
    fontSize: 12,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonFacebook: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

