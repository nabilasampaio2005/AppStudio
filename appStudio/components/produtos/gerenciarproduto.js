import React, { useState, useEffect, useRef } from 'react';

import {

    View, Text, StyleSheet,

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator

} from 'react-native';

import { TextInput } from 'react-native-paper'; 

export defaul funcion GerenciarProdutos(){
    const [nome, setNome] = useState('');
    const [tamanho, seTamanho] = useState('');
    const [descricao, setDescricao] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [key, setKey] = useState('');

return (

    <View style={styles.container}>

        <TextInput
            placeholder='Nome'
            left={<TextInput.Icon icon="car" />}
            maxLength={40}
            style={styles.input}
            onChangeText={(texto) => setNome(texto)}
            value={nome}
        />

        <TextInput
            placeholder='Tamanho'
            left={<TextInput.Icon icon="sale" />}
            style={styles.input}
            onChangeText={(texto) => setMarca(texto)}
            value={tamanho}
        />

        <TextInput

            placeholder='Descrição'
            left={<TextInput.Icon icon="sack" />}
            style={styles.input}
            onChangeText={(texto) => setDescricao(texto)}
            value={descricao}
        />

        <TextInput

            placeholder='Método de Pagamento'
            left={<TextInput.Icon icon="color" />}
            style={styles.input}
            onChangeText={(texto) => setPagamento(texto)}
            value={pagamento}
        />
    </View>
); 
}