import React from 'react';
import { Text, View, Button } from 'react-native'

export default function Landing({navigation}) {
  return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button 
    title="Register"
    onPress={()=> navigation.navigate("Registrar")}
    />
    <Text onPress={()=> navigation.navigate("Ingresar")} >Si ya estás registrado, ingresa abajo </Text>
    <Button 
    title="Ingresar"
    onPress={()=> navigation.navigate("Ingresar")}
    />
</View>
  )
  
  
}






