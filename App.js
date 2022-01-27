import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import Landing from './components/auth/Landing';
// import Register from './components/auth/Register';
// import Login from './components/Login';
import DrawerNavigation from './src/navigation/DrawerNavigation';





// const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      
    </NavigationContainer>
  );
}

{/* <Stack.Navigator initialRouteName="Landing" >
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:true, title: 'Centro Comercial Virtual'}} />
        <Stack.Screen name="Register" component={Register} options={{title: 'Regístrate'}} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Ingresa'}} />
      </Stack.Navigator> */}