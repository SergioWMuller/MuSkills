import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import { UserName } from '../components/UserName';

//criando uma interface, interfaces são representações de dados.
interface SkillData {
  id: string;
  name: string;
}


export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill

    }
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning !');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon !');
    }
    else {
      setGreeting('Good Evening !');
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>
        Olá, Sergio
      </Text>

      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nova Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button
        title="Add"

        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text >

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
          skill={item.name}
          onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 100,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 30,
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
  },
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
  },
  greetings: {
    color: '#FFF',
  }
})