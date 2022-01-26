import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import Login from './components/Login';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// if (firebase.apps.length === 0){
//   firebase.app
// }


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" >
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:true, title: 'Centro Comercial Virtual'}} />
        <Stack.Screen name="Register" component={Register} options={{title: 'Regístrate'}} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Ingresa'}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}