import React from 'react'
import { TextInput } from 'react-native'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    KeyboardAvoidingView,
 } from 'react-native'

export function UserName() {
    return (
      <KeyboardAvoidingView>
        <View>
          <TextInput style={styles.input}
          placeholder = "Enter your name"
          placeholderTextColor="#555"
          onChangeText = {() => {}}
          />
          <TouchableOpacity style={styles.button} >
            <Text style ={styles.buttonText} >
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
    },
    input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 30,
    padding: 15,
    marginTop: 30,
    borderRadius: 10,

    
    }
  })
  