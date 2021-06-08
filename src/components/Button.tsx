import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
 } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ ...rest } : ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.6}
            {...rest}
        >
            <Text style={styles.buttonText}>
                Add
          </Text>
        </TouchableOpacity>
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
    }
  })
  