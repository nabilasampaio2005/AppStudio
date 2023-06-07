import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity
} from 'react-native';

import { TextInput } from 'react-native-paper';
import firebase from '../services/connectionFirebase'

export default function Login({changeStatus}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('login');

  //método handleLogin para verificar se é login ou Cadastrar

  function handleLogin(){
    if(type === 'login'){
      // Aqui fazemos o login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((err)=>{
        console.log(err);
        alert('Email ou senha não cadastrados!');
        return;
      })   
    }else{
     // Aqui cadastramos o usuario
     const user = firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((user)=>{
       changeStatus(user.user.uid)
     })
     .catch((err)=>{
      console.log(err);
      alert('Erro ao Cadastrar!');
      return;
     })
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/userlogo.png')}
        style={{ width: 350, height: 350, marginLeft: 25}}>
      </Image>

      <SafeAreaView>
        <TextInput
          label="E-mail"

          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}

          right={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"


          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          

          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </SafeAreaView>

      <TouchableOpacity
                style={[styles.handleLogin, 
                { backgroundColor: type === 'login' ? '#038bbb' : '#8B9EE0' }]}
                onPress={handleLogin}
            >
                <Text style={styles.loginText}>
                 {type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>

 

            <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
                <Text style={{ textAlign: 'center' }}>
                    {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
                </Text>
            </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    marginBottom: 20,
    marginLeft: 40,
    backgroundColor: '#FFF',
    borderRadius: 12,
    height: 45,
    width: 320,
    padding: 10,
    borderWidth: 2,
    borderColor: '#8B9EE0'
  },

  handleLogin:{ 
    alignItems: 'center', 
    justifyContent:'center', 
    height: 50, 
    marginTop:15,
    marginLeft: 30, 
    borderRadius: 20,
  }, 
  loginText:{ 
    color: '##8B9EE0', 
    fontSize: 24, 
    
  }, 
});