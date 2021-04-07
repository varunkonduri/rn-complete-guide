import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,  View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  //const [enteredGoal, setEnteredGoal]=useState('');
  const [CourseGoals, setCourseGoals] =useState([]);

  
  const addGoalHandler = goalTitle =>{
    setCourseGoals(currentGoals=>[...currentGoals, {id:Math.random().toString(),value:goalTitle}]);
  };
  return (
    
    <View style={styles.root}>
      <GoalInput  onAddGoal={addGoalHandler}/>
      <FlatList keyExtractor ={(item, index) => item.id}
      data={CourseGoals}renderItem={itemData =><GoalItem onPress={console.log('Does that thing')} title={itemData.item.value} />}/>
      
      
      
    </View>
    
  );
}
 
const styles = StyleSheet.create({
 root:{padding:40}    
 
 
});   
