import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from '../screens/categories';
import Products from '../screens/products';
import Landing from '../components/auth/Landing';
import Login from '../components/Login';
import Register from '../components/auth/Register';
import PruebasEber from '../screens/PruebasEber';
import PruebasMarchionno from '../screens/PruebasMarchionno';
import PruebasLeyder from '../screens/PruebasLeyder';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Página principal" component={Landing} />
      <Drawer.Screen name="Ingresar" component={Login} />
      <Drawer.Screen name="Registrar" component={Register} />
      <Drawer.Screen name="Categorías" component={Categories} />
      <Drawer.Screen name="Productos" component={Products} />
      <Drawer.Screen name="Pruebas Éber" component={PruebasEber} />
      <Drawer.Screen name="Pruebas Marchionno" component={PruebasMarchionno} />
      <Drawer.Screen name="Pruebas Léyder" component={PruebasLeyder} />

    </Drawer.Navigator>
  );
}
