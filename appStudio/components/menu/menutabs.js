import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//possibilita a navegação entre páginas do app
import { NavigationContainer } from '@react-navigation/native';
//cria os icones do menu
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'; 


//import LinearGradient from 'react-native-linear-gradient'; 

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}
function ListScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}
function PostScreen() {
    return <GerenciarProdutos />
}
function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
export default function MenuTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        tabBarLabel: 'Listar Produtos',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="list" color={color} size={size} />
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name="Produtos"
                    component={PostScreen}
                    options={{
                        tabBarLabel: 'Produtos',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="save" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconTabRound: {
        width: 60,
        height: 90,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
}); 