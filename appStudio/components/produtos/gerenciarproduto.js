import React, { useState, useEffect, useRef } from 'react'; 

import { 

    View, Text, StyleSheet, Button, 

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator 

} from 'react-native'; 

import { TextInput } from 'react-native-paper'; 
import firebase from '../../services/connectionFirebase';

const Separator = () => { 

    return <View style={styles.separator} />; 
}

export default function GerenciarProdutos() { 

    const [nome, setNome] = useState('');  
    const [marca, setMarca] = useState('');  
    const [preco, setPreco] = useState('');  
    const [cor, setCor] = useState('');  
    const [key, setKey] = useState('');  

    async function insertUpdate() { 

        //editar dados 

        if (nome !== '' 
        & marca !== ''  
        & preco !== '' 
        & cor !== ''
        & key !== '') { 
    
          firebase.database().ref('produtos').child(key).update({ 
    
            nome: nome, marca: marca, preco: preco, cor:cor
    
          }) 
    
          Keyboard.dismiss(); 
    
          alert('Produto Editado!'); 
    
          clearFields(); 
    
          setKey(''); 
    
          return; 
    
        } 
    
        //cadastrar dados 
    
        let produtos = await firebase.database().ref('produtos'); 
        let chave = produtos.push().key; //comando para salvar é o push 

    
        produtos.child(chave).set({ 
    
          nome: nome, 
          marca: marca, 
          preco: preco,
          cor:cor,
    
        }); 
    
        Keyboard.dismiss(); 
    
        alert('Produto Cadastrado!'); 
        clearFields(); 
    
      } 

//metodo para limpar os campos com valores
        function clearFields(){
        setNome('');
        setMarca('');
        setPreco('');
        setCor('');
}

    return ( 
        <View style={styles.container}> 

    <Separator/>
            <TextInput 
                placeholder='Produto' 
                left={<TextInput.Icon icon="edit" />} 
                maxLength={40} 
                style={styles.input} 
                onChangeText={(text) => setNome(text)} 
                value={nome} 
            /> 

    <Separator/>
            <TextInput 
                placeholder='Marca' 
                left={<TextInput.Icon icon="sale" />} 
                style={styles.input} 
                onChangeText={(text) => setMarca(text)} 
                value={marca} 

            /> 
    <Separator/>
            <TextInput 
                placeholder='Preço (R$)' 
                left={<TextInput.Icon icon="sack" />} 
                style={styles.input} 
                onChangeText={(text) => setPreco(text)} 
                value={preco} 

            /> 
    <Separator/>
            <TextInput 
                placeholder='Cor' 
                left={<TextInput.Icon icon="invert-colors" />} 
                style={styles.input} 
                onChangeText={(text) => setCor(text)} 
                value={cor} 
            />                  
        <View 
                style={styles.button}> 
        <Button 
                onPress={insertUpdate} 
                title="Adicionar" 
                color="#121212" 
                accessibilityLabel="" 
    
            /> 
        </View> 
        </View> 
    ); 
} 

const styles = StyleSheet.create({ 
    container: { 
    flex: 1, 
    margin: 10, 
}, 
    input: { 
        borderWidth: 1, 
        borderColor: '#121212', 
        height: 40, 
        fontSize: 13, 
        borderRadius: 8 
    }, 

    separator: { 
        marginVertical: 5, 
    }, 

    button: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#3ea6f2', 
        borderWidth: 0.5, 
        borderColor: '#fff', 
        height: 40, 
        borderRadius: 5, 
        margin: 5, 

    }, 
    
    buttonImageIconStyle: { 
        padding: 10, 
        margin: 5, 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch', 

    }, 

    buttonTextStyle: { 
        color: '#fff', 
        marginBottom: 4, 
        marginLeft: 100, 
        fontSize: 20 

    }, 

    buttonIconSeparatorStyle: { 
        backgroundColor: '#fff', 
        width: 1, 
        height: 20, 
    }, 

    listar: { 
        fontSize: 20, 
        textAlign: 'center' 
    } 
}); 

   