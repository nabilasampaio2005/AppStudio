import {
    Text,
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Button,
  } from 'react-native';
  import React from 'react';
  const Separator = () => {
    return <View style={styles.separator} />;
  };
  class TelaPrincipal extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../logo.png')} />
          <Text style={styles.paragraph}> AGENDE SEU HORÁRIO!</Text>
          <SafeAreaView style={styles.container}>
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="A C E S S A R "
              color="#333333"
            />
            <Separator />
            <Button onPress={''} title="A J U D A  " color="#333333" />
          </SafeAreaView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Arial',
    },
    logo: {
      width: 300,
      height: 300,
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#000000',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  export default TelaPrincipal;