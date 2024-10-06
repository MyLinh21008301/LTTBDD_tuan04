import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image
          source={require('../assets/img/Container_screen1.png')} 
          style={styles.container_screen1} 
        />
        
        <Text style={styles.lable_screen1}>Boost Productivity</Text>
        <Text style={styles.text_screen1}>Simplify tasks, boost producttivity</Text>
        <TouchableOpacity style={styles.btn}
          onPress={()=>{navigation.navigate("Tab2")}}
        >
          <Text style={styles.textBtn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}
            onPress={()=>{navigation.navigate("Tab3")}}
        >
          <Text style={styles.textBtn2}>Login</Text>
        </TouchableOpacity>
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_screen1: {
      width: 350,
      height: 500,
      borderRadius: 30, 
    },
    lable_screen1: {
      fontSize: 30,
      fontWeight: 'bold',
      marginRight: 80,
      marginTop: 30,
    },
    text_screen1: {
      fontSize: 16,
      color: '#C0C0C0',
      fontWeight: '500',
      marginRight: 80,
      marginTop: 10,
    },
    btn: {
      backgroundColor: '#5CC1D6',
      padding: 15,
      marginTop: 20,
      borderRadius: 20,
      width: 350,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBtn:{
      fontSize: 20,
      color: '#F5F5F5',
      fontWeight: '600',
    },
    btn2: {
      padding: 15,
      marginTop: 10,
      borderRadius: 20,
      width: 350,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBtn2:{
      fontSize: 20,
      color: '#4F4F4F',
      fontWeight: '400',
    },
    dots: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    dot: {
      width: 12,
      height: 12,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginHorizontal: 5,
      borderColor: '#5CC1D6',
      borderWidth: 1,
    },
    activeDot: {
      backgroundColor: '#00c0ff',
    },
});
