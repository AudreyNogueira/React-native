import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// NA VERDADE ESSA É A PÁGINA DA LISTAGEM DE PRODUTOS
// CATEGORIAS
const homes = [
    {
        nome: "Geladeira"
    },
    {
        nome: "Lava Louças"
    },
    {
        nome: "Fogão"
    },
    {
        nome: "Micro-ondas"
    },
    {
        nome: "Ar condicionado"
    },
    {
        nome: "Frigobar"
    }
]
function Home({navigation}) {
    function autenticacao() {
        if (btnHome == true) {
           navigation.navigate("PaginaInicial")
        }
    }
   
    return (
       

        <View>
            
            <TouchableOpacity style={styles.btnHome} onPress={() =>
                            navigation.navigate('PaginaInicial')}>
            <Image style={styles.logoHome} source={require('../../assets/homee.png')}/>
            </TouchableOpacity> 
            
            <Text style={styles.texto}>Produtos</Text>
            <Text style={styles.texto}>Os melhores preços, você encontra aqui!</Text> 
            
            {
                homes.map((home, index) =>
                 <Text style={styles.categoria} key={index}>{home.nome}</Text>
                 )
            }
            
            <Image source={require('../../assets/fogao1.jpeg')}
             style={styles.logo}
             ></Image>
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.texto}onPress={() =>
                            navigation.navigate('Login')}>Comprar</Text>
            </TouchableOpacity>
            {/* {
                homes.map((home, index) =>
                 <Text key={index}>{home.nome}</Text>
                 )
            } */}
            <Image source={require('../../assets/lavaloucas1.jpeg')}
             style={styles.logo2}
             ></Image>

        </View>
    )
  }
  const styles = StyleSheet.create({
    // ESTILIZANDO IMAGENS  
    logo: {
          flex: 2,
        borderRadius: 4,
        padding: 40,
        width: 60,
        height: 136,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 5,
        marginBottom: 10,
        margin:10,
        marginHorizontal: 129
      },
      logo2: {
        flex: 2,
      borderRadius: 4,
      padding: 40,
      width: 60,
      height: 136,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 5,
      marginBottom: 10,
      margin:10,
      marginHorizontal: 129
    },
    logoHome: {
        flex: 1,
      borderRadius: 300,
      padding: 30,
      width: 30,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 0,
      marginBottom: 10,
      margin:10,
      marginHorizontal: 17,
    },
    // ESTILIZANDO O TEXTO PRODUTOS
      text: {
        fontSize: 30,
        marginTop: 30,
        marginHorizontal: 0
      },
    //   ESTILIZANDO O SLOGAN
      texto: {
        fontSize: 20,
        marginTop: 5,
        backgroundColor: "#ADD8E6"
        
      },
    //   ESTILIZANDO O BOTÃO COMPRAR
      btn: {
        width: "30%",
        margin: 2,
        padding: 2,
        backgroundColor: "#00BFFF",
        borderRadius:10,
        marginBottom: 10,
        marginTop: 10,
        margin:10,
        marginHorizontal: 129
        },
        btnHome: {
            width: "10%",
            margin: 2,
            padding: 2,
            backgroundColor: "white",
            borderRadius:100,
            marginBottom: 0,
            marginTop: 30,
            margin:0,
            marginHorizontal: 0
            },
        categoria: {
         marginHorizontal: 120,
         marginTop: 0,
         margin: 0
        },
  })
export default Home;