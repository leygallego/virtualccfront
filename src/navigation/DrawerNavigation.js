import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Categories from '../screens/categories';
import Products from '../screens/products';
import Landing from '../components/auth/Landing';
import Login from '../components/Login';
import Register from '../components/auth/Register';
import PruebasEber from '../screens/PruebasEber';
import PruebasMarchionno from '../screens/PruebasMarchionno';
import PruebasLeyder from '../screens/PruebasLeyder';
import MenuButtonItem from '../components/MenuButtonItem';
import eber from '../images/eber.png'
import leyder from '../images/leyder.png'
import marchionno from '../images/marchionno.png'


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuItems {...props} />}
    >
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

const MenuItems = ({ navigation }) => {

  return (
    <DrawerContentScrollView
      style={styles.container}
    >
      <Text style={styles.title} >Mi Menú</Text>

      <MenuButtonItem
        text='Página Principal'
        onPress={() => { navigation.navigate('Página principal') }}
      />

      <MenuButtonItem
        text='Ingresar'
        onPress={() => { navigation.navigate('Ingresar') }}
      />

      <MenuButtonItem
        text='Registrar'
        onPress={() => { navigation.navigate('Registrar') }}
      />

      <MenuButtonItem
        text='Categorías'
        onPress={() => { navigation.navigate('Categorías') }}
      />

      <MenuButtonItem
        text='Productos'
        onPress={() => { navigation.navigate('Productos') }}
      />

      <MenuButtonItem
        image={eber}
        text='Pruebas Éber'
        onPress={() => { navigation.navigate('Pruebas Éber') }}
      />

      <MenuButtonItem
        image={marchionno}
        text='Pruebas Marchionno'
        onPress={() => { navigation.navigate('Pruebas Marchionno') }}
      />

      <MenuButtonItem
        image={leyder}
        text='Pruebas Léyder'
        onPress={() => { navigation.navigate('Pruebas Léyder') }}
      />

      


    </DrawerContentScrollView>
  )

}

const styles = StyleSheet.create({

  container: {
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }

})