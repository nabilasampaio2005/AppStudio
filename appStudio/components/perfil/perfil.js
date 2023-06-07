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

export default function Perfil() {

    const [nome, setNome] = useState('');
    const [datanascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [key, setKey] = useState('');  

    async function insertUpdate() {

        //editar dados 

        if (nome !== ''
            & datanascimento !== ''
            & telefone !== ''
            & cidade !== ''
            & estado !== ''
            & key !== '') { 

            firebase.database().ref('perfil').child(key).update({

                nome: nome, datanascimento: datanascimento, telefone: telefone, cidade: cidade, estado: estado

            })

            Keyboard.dismiss();

            alert('Perfil editado');

            clearFields();

            setKey('');

            return;

        }

        //cadastrar dados 

            let perfil = await firebase.database().ref('perfil');
            let chave = perfil.push().key; //comando para salvar � o push


            perfil.child(chave).set({

                nome: nome,
                datanascimento: datanascimento,
                telefone: telefone,
                cidade: cidade,
                estado: estado
            }); 

        Keyboard.dismiss();

        alert('Perfil cadastrado!');
        clearFields();

    }

    //metodo para limpar os campos com valores
    function clearFields() {

        setNome('');
        setDataNascimento('');
        setTelefone('');
        setCidade('');
        setEstado('');
    }

    return (
        <View style={styles.container}>

            <Separator />
            <TextInput
                placeholder='Nome'
                left={<TextInput.Icon icon="tag" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />

            <Separator />
            <TextInput
                placeholder='Data de Nascimento'
                left={<TextInput.Icon icon="calendar" />}
                style={styles.input}
                onChangeText={(text) => setDataNascimento(text)}
                value={datanascimento}

            />
            <Separator />
            <TextInput
                placeholder='Telefone'
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                onChangeText={(text) => setTelefone(text)}
                value={telefone}

            />
            <Separator />
            <TextInput
                placeholder='Cidade'
                left={<TextInput.Icon icon="pencil" />}
                style={styles.input}
                onChangeText={(text) => setCidade(text)}
                value={cidade}
            />

            <Separator />
            <TextInput
                placeholder='Estado'
                left={<TextInput.Icon icon="city" />}
                style={styles.input}
                onChangeText={(text) => setEstado(text)}
                value={estado}
            />

            <Separator />
            <View
                style={styles.button}>
                <Button
                    onPress={insertUpdate}
                    title="Cadastrar"
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

