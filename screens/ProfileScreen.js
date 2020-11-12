import React from 'react';
import { StyleSheet, Alert, Text, SafeAreaView, View, TextInput, Button } from 'react-native';


const ProfileScreen = ({navigation}) => {
    return(
        <SafeAreaView>
        <Button
        title="Alert Button"
        onPress={() => Alert.alert('Simple Button pressed')}/>
        <Button
        title="Console Log Button"
        onPress={() => console.log("Simple button pressed")}
        />
        </SafeAreaView>



    );
}
export default ProfileScreen;

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
