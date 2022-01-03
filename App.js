
import React, { useState } from 'react';
import api from './src/services/api';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text} >Digite o Cep desejado</Text>

        <TextInput
          style={styles.input}
          placeholder='Ex: 71693033'
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor:'#a4cdff'} ]} >
          <Text style={styles.botaoText} >Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#00ba7a'} ]} >
          <Text style={styles.botaoText} >Limpar</Text>
        </TouchableOpacity>

      </View>
    <View style= {styles.resultados} >
      <Text style={styles.itemText} > CEP:  </Text>
      <Text style={styles.itemText} > Logradoro: </Text>
      <Text style={styles.itemText} > Bairro: </Text>
      <Text style={styles.itemText} > Cidade: </Text>
      <Text style={styles.itemText} > Estado: </Text>
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    width: '90%',
    padding: 10,
    fontSize: 18

  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  
    justifyContent: 'space-around'
  },
  botao: {
    height:50,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    width: '20%',
    borderRadius:7,
    
  },
  botaoText: {
    fontSize:16,
    color:'#fff'
  },
  resultados:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  itemText:{
    fontSize: 18
  }


})