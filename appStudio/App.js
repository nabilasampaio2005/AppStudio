import React, { useState } from 'react';
import Login from '../appStudio/components/login'
import Menu from './components/menu/menutabs';
 

export default function App() {
  const [user, setUser] = useState(null);

 

  //verifica se existe um usuário logado, se não houver chama a
  //tela de login
  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />
  }
  return <Menu/>
}
 
