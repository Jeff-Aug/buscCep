
import React, { useState, useRef } from 'react';
import api from './src/services/api';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, TextInput, Keyboard } from 'react-native';

export default function App() {
  const [cep, setCep] = useState('')
  const inputRef = useRef(null)
  const [cepUser, setCepUser] = useState(null)


  function limpar() {
    setCep('')
    inputRef.current.focus()
  }

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep valido')
      setCep('')
      return
    }

    try {
      const response = await api.get(`/${cep}/json`)
      console.log(response.data)
      setCepUser(response.data)
      Keyboard.dismiss()//Garante que o teclado sera fechado

    } catch (error) {
      console.log('ERROR: ' + error)
    }


  }
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
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#a4cdff' }]} onPress={buscar}>
          <Text style={styles.botaoText} >Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#00ba7a' }]} onPress={limpar} >
          <Text style={styles.botaoText} >Limpar</Text>
        </TouchableOpacity>

      </View>
      {cepUser &&
        <View style={styles.resultados} >
          <Text style={styles.itemText} > CEP: {cepUser.cep} </Text>
          <Text style={styles.itemText} > Logradoro: {cepUser.logradouro} </Text>
          <Text style={styles.itemText} > Bairro: {cepUser.bairro} </Text>
          <Text style={styles.itemText} > Cidade: {cepUser.localidade} </Text>
          <Text style={styles.itemText} > Estado: {cepUser.uf} </Text>

        </View>
      }
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '20%',
    borderRadius: 7,

  },
  botaoText: {
    fontSize: 16,
    color: '#fff'
  },
  resultados: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18
  }


})