import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button } from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
   
        <Text style= {{fontSize:25, backgroundColor:'#cbbcb1'}}>LOG IN</Text>    
        
        <table>
        
        <tbody>
        <tr>
            <td> User ID :
            </td>
            <td>
                <TextInput style={{ fontWeight: '90', color: 'white', height: 'fill', width: 'fill', borderColor: 'gray', borderWidth: 1 }}></TextInput>
            </td>
        </tr>
        <tr>
                <td>
                    Password:
                </td>
                <td>
                     <TextInput secureTextEntry={true} style={styles.default} style={{fontWeight: '90',color: 'white',height: 'fill', width: 'fill', borderColor: 'gray', borderWidth: 1 }} ></TextInput>
            
                </td>
        </tr>
        </tbody>
      </table>
      
    <Button
    title="LOG IN"
    onPress={() =>
      navigation.navigate('Profile', { name: 'Jane' })
    }/>
      
   </SafeAreaView> 
    );
}
export default LoginScreen;

const styles = StyleSheet.create({
    
    subContainer:{
        height: 400,
        width:500,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        paddingTop: 50
    },
    font: {
        color: 'white',
        fontFamily: 'roboto',
        letterSpacing: 2,
        fontSize: 20
    }
});
