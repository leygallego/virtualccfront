import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function MenuButtonItem({text, onPress, image}) {
  return (
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}
    >
        <Image 
           source={{uri: image}}
           style={styles.image}
        />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    buttonContainer: {
      alignItems: 'center', 
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      marginBottom: 15,
      backgroundColor: '#d9d9d9'
    },
    
    title: {
      fontSize: 20 ,
      fontWeight: 'bold'
    },

    image:{
            borderRadius : 30,
            height : 45,
            width: 45
    }

    
    })