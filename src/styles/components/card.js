import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    card: {
      width: 143,
      height: 286,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,      
    },
    iconUp: {
        flex: 1,
        alignItems: 'flex-start'
    },
    iconDown: {
        fle: 1,
        alignItems: 'flex-end'
    }
  });