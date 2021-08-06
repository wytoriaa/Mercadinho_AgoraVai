import React, {useContext} from 'react';
import { View, Button, Image, StyleSheet, Text, ImageBackground, Dimensions} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
//import styles from '../styles/style'
// comentario

export default function Header({navigation}){
  return(
    <View style={styles.HeaderContainer}>
   <Image style={styles.BackgroundHeader}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/218966775_4039464899495914_2053407445528478012_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeHHDPHkEBUceEZWFEkyrZsNzgnrMqbimtHOCesypuKa0YQ3fFQ6nMLegUSp9SYKD31X5pNlnk5UwGfmSj9O4C77&_nc_ohc=4BavRFGV6YUAX-3YuSc&tn=72GiimqC7QX0-X-C&_nc_ht=scontent.frec31-1.fna&oh=b18368d2814908fd574dedc721f3652f&oe=61318125',
                    }}/>
    <Image style={styles.Logotipo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/219682014_4039474892828248_6754888234418680036_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=730e14&_nc_eui2=AeGxnDvqkpvBEANysk0EEqWhD3cCxpDI2ssPdwLGkMjayyY7jMAuRx6OAnE9okoQ-h2h2IH9veALUdo4feTTzLFP&_nc_ohc=S2OhaFArpAsAX85hzju&_nc_ht=scontent.frec31-1.fna&oh=b75b306547a5be631d7a04dd7eb8c122&oe=6131903A',
                    }}/>                
    </View>

  )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      height:30
    },
    tinyLogo: {
      display: 'flex',
      flexDirection:'row',  
      margin:5,  
      width: 300,
      height: 200,
      borderRadius: 20,
    },
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