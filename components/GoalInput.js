import React,{useState} from 'react';
import { View,TextInput,Button,StyleSheet } from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal]=useState('');
    const goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
      };
    return(
    <View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal" style={styles.input} 
    onChangeText={goalInputHandler}
    value={enteredGoal}/>
    <Button title="ADD" onPress={props.onAddGoal.bind(this.enteredGoal) }/> 
    </View>
    );
};
const styles = StyleSheet.create({
    inputContainer:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    input:{width:'80%',borderColor:'black',padding:8,borderWidth:0.5}
});

export default GoalInput; 