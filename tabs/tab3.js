import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';




const Stack = createNativeStackNavigator();

// Khai báo state để lưu giá trị của các ô input


export default function App({ navigation, userData, setUserData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields before signing in.");
      return;
    }

    // Kiểm tra nếu email đã tồn tại trong mảng userData
    const user = userData.find(user => user.email === email && user.password === password);
    if (user) {
      navigation.navigate("Tab4");
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/img/Image_20.png')}
        style={styles.banner}
      />

      <View style={styles.inputContent}>
        <View style={styles.formBox}>
          <Text style={styles.title} >Welcome!</Text>
          <Text style={styles.lable}>Email</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/img/Vector.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter email "
              placeholderTextColor="#C0C0C0"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={styles.lable}>Password</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/img/lock.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#C0C0C0"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Image source={require('../assets/img/eye.png')} style={styles.inputIcon} />
          </View>
          <TouchableOpacity style={styles.btn}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.backButton}
          onPress={() => { navigation.navigate("Tab1") }}
        >
          <Image source={require('../assets/img/BackBtn.png')} style={styles.backArrow} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: 400,
    height: 200
  },
  inputContent: {
    flex: 1,
    width: 400,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    marginTop: -20
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 70,
  },
  lable: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,

  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  inputIcon: {
    width: 20,
    height: 19,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
