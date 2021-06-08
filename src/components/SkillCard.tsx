import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
 } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({ skill, ...rest }) {
    return (
        <TouchableOpacity
        style={styles.buttonSkill}
        {...rest}
        >
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
  