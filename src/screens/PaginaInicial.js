import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// A VERDADEIRA PAGINA HOME

function PaginaInicial({navigation}) {
    function autenticacao() {
        if (btn == true) {
           navigation.navigate("Home")
        }}
    return (
        <View>
            <Text style={styles.text}>Seja bem vindo</Text> 
            <Text style={styles.texto}>Confira nossas ofertas!</Text> 
            
            <Image source={require('../../assets/eletrodom.jpg')}
             style={styles.promo}
             ></Image>
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.texto} onPress={() =>
                            navigation.navigate('Home')}>Comprar</Text>
            </TouchableOpacity>
            {/* {
                homes.map((home, index) =>
                 <Text key={index}>{home.nome}</Text>
                 )
            } */}
            <Image source={require('../../assets/images.jpeg')}
             style={styles.logo2}
             ></Image>

        </View>
    )
  }
  const styles = StyleSheet.create({
    // ESTILIZANDO IMAGENS  
    // logo: {
    //       flex: 1,
    //     padding: 59,
    //     width: 300,
    //     marginTop: 25,
    //     marginBottom: 10,
    //     margin:30,
    //     marginHorizontal: 170
    //   },
      logo2: {
        flex: 2,
        borderRadius: 13,
        padding: 30,
        width: 230,
        height: 36,
        marginTop: 5,
        marginBottom: 10,
        margin:10,
        marginHorizontal: 52
    },
    promo: {
        flex: 2,
      borderRadius: 13,
      padding: 30,
      width: 230,
      height: 36,
      marginTop: 5,
      marginBottom: 10,
      margin:10,
      marginHorizontal: 52
    },
    // ESTILIZANDO O TEXTO PRODUTOS
      text: {
        fontSize: 30,
        marginTop: 30,
        marginHorizontal: 39
      },
    //   ESTILIZANDO O SLOGAN
      texto: {
        fontSize: 20,
        marginTop: 5,
        backgroundColor: "#ADD8E6"
        
      },
    //   ESTILIZANDO O BOTÃO COMPRAR
      btn: {
        width: "40%",
        margin: 2,
        padding: 2,
        backgroundColor: "#00BFFF",
        borderRadius:10,
        marginBottom: 10,
        marginTop: 10,
        margin:10,
        marginHorizontal: 119
        },
  })
  export default PaginaInicial;