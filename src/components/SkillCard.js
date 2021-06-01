import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
 } from 'react-native'

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
      backgroundColor: '#1F1E25',
      padding: 20,
      borderRadius: 40,
      alignItems: 'center',
      marginVertical: 7,
    },
    textSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
    }
  })
  