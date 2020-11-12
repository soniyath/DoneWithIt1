import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: 'Please Enter your Login Credentials' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}
        options={{ title: 'Welcome!!' }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default App;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#556052',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: {
        width: 250,
        height: 100,
        backgroundColor:'#af6b58',
        color: 'white',
        fontFamily: 'roboto',
        letterSpacing: 2,
        fontSize: 20,
        paddingTop: 25
    },
    
    login:{
        fontFamily: 'roboto',
        height: '50%',
        width: '50%',
        backgroundColor:'#214252',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'right'
    }
});
