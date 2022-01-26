import React from 'react';
import { Text, View, Button } from 'react-native'

export default function Landing({navigation}) {
  return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button 
    title="Register"
    onPress={()=> navigation.navigate("Register")}
    />
    <Text onPress={()=> navigation.navigate("Login")} >Si ya estás registrado, ingresa abajo </Text>
    <Button 
    title="Ingresar"
    onPress={()=> navigation.navigate("Login")}
    />
</View>
  )
  
  
}






