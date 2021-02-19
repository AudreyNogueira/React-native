import React from  'react';
import { View, Text, ImageBackground, Image, TextInput, Button, Alert, Touchable,Plataform, TouchableOpacity } from 'react-native';

import Fundo from '../../../assets/eletro.jpg';
// import logo from '../../../assets/logoo.png';
import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "audrey@audrey.com",
    senha:"aud"
}
function Login({navigation}) {
    function autenticacao() {
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
           navigation.navigate("Home")
        } else {
            navigation.navigate("Home")
        }
    }
    //     Alert.alert("Seja bem vindo", "Boas compras!")
    // }
    const [usuario, setUsuario] = React.useState("");
    const [senha,setSenha] = React.useState("");
    return (
        <View>
            {/* <Text>Login</Text> */}

            <ImageBackground source={Fundo} style={styles.fundo}>
                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>
                 {/* <Image source={logo} style={styles.logo}/> */}
                <TextInput style={styles.input}
                placeholder="Digite seu email"
                secureTextEntry={false}
                value={usuario}
                onChangeText={(text) => setUsuario(text)} 
                />
                
                <TextInput style={styles.input}
                placeholder="Digite sua senha" secureTextEntry={true} maxLength={10} 
                value={senha}
                onChangeText={(text) => setSenha(text)}
                />

                <TouchableOpacity style={styles.btn} onPress={autenticacao}> 
                <Text style={styles.texto}>Entre</Text>
                </TouchableOpacity>
                
            </ImageBackground>

            


        </View>
    )
}
export default Login;