import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
// import FirebaseApp  from '../../App';
// import { createUserWithEmailAndPassword
//     } from 'firebase/auth';

export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp =  this.onSignUp.bind(this)
        
    }

    onSignUp(){
        // const {email, password, name}  = this.state;

        // firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then((result) => {
        //     console.log(result);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <TextInput
                    placeholder='Nombre'
                    // onChangeText={(name)=> this.setState({name})}
                />
                <TextInput
                    placeholder='Email'
                    // onChangeText={(email)=> this.setState({email})}
                />
                <TextInput
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    // onChangeText={(password)=> this.setState({password})}
                />
                <Button 
                  title="Regístrate"
                    // onPress={()=> this.onSignUp()}
    />
        </View>
    ) 
  }
}

export default Register;
