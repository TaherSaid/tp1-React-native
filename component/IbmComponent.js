import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const IbmComponent=()=>{
const [message,setMessage]=useState("BMI Message Satut")
const [taille,tailleSet]=useState(0)
const [poids,poidsSet]=useState(0)
const etat=(bmi)=>{
    if(bmi<16){setMessage('Severement maigre')}
    else if(bmi=>16 && 16<=bmi<18.5){setMessage ('Maigre')}
    else if(bmi<25){setMessage ('Normal')}
    else if(bmi=>25 && bmi<30){setMessage('Surpoids')}
    else{setMessage('obseisite')}
    
}
return(
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
            fontSize:30,
            color:'#1f6f8b',
            marginBottom:100
        }}>Calcul BMI "Tp1_EX2"</Text>
        <TextInput keyboardType="numeric" style={{
            width:'70%',
            backgroundColor:'#cee397',
            marginBottom:30
        }} placeholder="Taille en m " onChangeText={(taille)=>tailleSet(taille)}/>
        <TextInput keyboardType="numeric" style={{
            width:'70%',
            backgroundColor:'#cee397',
            marginBottom:70
        }} placeholder="Poids en kg  " onChangeText={(poids)=>poidsSet(poids)}  />
        <Text style={{marginBottom:30}}>Resulta calcul BMI:{poids/Math.pow(taille,2)}={taille}/{poids}</Text>
        <Button title="check etat" onPress={()=>etat((poids/Math.pow(taille,2)))} />
        <Text style={{marginTop:30}}>{message}</Text>
    </View>
);
}
export default IbmComponent;