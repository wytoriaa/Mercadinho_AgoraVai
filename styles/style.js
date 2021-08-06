import { Dimensions, StyleSheet, styleDefault } from "react-native";


export const style = StyleSheet.create ({

  Container :{
      flex:1,
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center'
  },

// HEADER
  HeaderContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  BackgroundHeader: {
    width: Dimensions.get("window").width,
    resizeMode: "contain",
    height: Dimensions.get("window").width/3,
  },
  Logotipo: {
    width: Dimensions.get("window").width/2,
    height: Dimensions.get("window").width/4,
  },





})

export default styleDefault;  