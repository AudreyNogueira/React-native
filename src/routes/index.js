import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// BOTÃO LOGIN> PRODUTOS
// BOTÃO PRODUTOS-comprar> LOGIN
// BOTÃO PRODUTOS- imagem casa> PAGINA INICIAL
// BOTÃO PAGINA INICIAL -comprar> PRODUTOS  
import Login from '../screens/Login';
import Home from '../screens/Home.js';
import PaginaInicial from '../screens/PaginaInicial';

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    Home: {
        nome: "Home",
        screen: Home
    },
    PaginaInicial:{
    nome: "PaginaInicial",
    screen: PaginaInicial
    }
}
const Navegacao = createSwitchNavigator(Rotas);
export default createAppContainer(Navegacao)

