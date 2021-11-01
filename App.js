import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import StateProvider from './src/contexts/ContextProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Stack = createNativeStackNavigator();
import Reducers from './src/Reducers';

let store = createStore(Reducers);

import Start from './src/pages/Start';

const Navegador = StackNavigator({
  Start: {
    Screen: Start
  }

});



export default function App(){
  return(
      <Provider store={store}>
        <Navegador/>
      </Provider>      
  );
}


/* export function App() {

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
 */


/**
 * import { connect } from 'reacr-redux';
 * 
 * 
 * 
 * 
 * 
 * 
 * const mapStateToProps = (state) => {
 *  return {
 *      player: state.point.player,
 *      computer: state.point.computer
 *    };
 * };
 */

/**
 * const ComponentConnec = connect(mapStateToProps)(Componente)

export default ComponentConnec
*/
