import { View, Text } from 'react-native';
import React from 'react';

export default function PruebasEber({navigation}) {
  return (
    <View>
      <Text onPress={()=> navigation.navigate("Pruebas Marchionno")} >Este es el espacio para pruebas de Éber</Text>
    </View>
  );
}
