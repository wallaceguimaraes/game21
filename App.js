import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import StateProvider from './src/contexts/ContextProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Stack = createNativeStackNavigator();
let store = createStore();

import Start from './src/pages/Start';


export default function App() {


  
  const initialState = { player: 0, computer: 0};
  
  const reducer = (state, action)=> {
    switch ( action.type) {
      case "modifyPlayer":
        return {
          ...state, player
        }
        break;
    
      default:
        break;
    }
  }

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={rotaInicio}>
        <Stack.Screen name="Start" 
                      component={Start}
                    options={{
                      title: "",
                      headerShown: false
                     }}
                      />
        </Stack.Navigator>
      </NavigationContainer>


    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
