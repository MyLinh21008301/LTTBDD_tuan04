import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function App({navigation, userData, setUserData}) {
  // Khai báo state để lưu giá trị của các ô input
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = () => {
    if (!userName || !email || !password) {
      Alert.alert("Error", "Please fill in all fields before signing up.");
      return;
    }
    // Thêm thông tin người dùng vào mảng
    setUserData([...userData, { userName, email, password }]);
    navigation.navigate("Tab3");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.backButton}
       onPress={()=>{navigation.navigate("Tab1")}}
      >
        <Image source={require('../assets/img/BackBtn.png')} style={styles.backArrow} /> 
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={require('../assets/img/Image_19.png')} style={styles.logo} />
        <Text style={styles.title}>Nice to see you!</Text>
        <Text style={styles.subtitle}>Create your account</Text>
        
        {/* Input tên người dùng */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/codicon_account.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your user name"
            placeholderTextColor="#C0C0C0"
            value={userName}
            onChangeText={setUserName} // Cập nhật giá trị state khi nhập
          />
        </View>

        {/* Input email */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/Vector.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#C0C0C0"
            value={email}
            onChangeText={setEmail} // Cập nhật giá trị state khi nhập
          />
        </View>

        {/* Input mật khẩu */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/lock.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            placeholderTextColor="#C0C0C0"
            secureTextEntry
            value={password}
            onChangeText={setPassword} // Cập nhật giá trị state khi nhập
          />
          <Image source={require('../assets/img/eye.png')} style={styles.inputIcon}/>
        </View>

        {/* Checkbox điều khoản */}
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxPress}>
          <MaterialIcons
            name={isChecked ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={isChecked ? "#06b6d4" : "#64748b"} 
          />
          <Text style={styles.checkboxText}>
            I agree with <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>

        {/* Nút Sign up */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Continue</Text>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  content: {
    padding: 30,
    width: '97%',
    maxWidth: 400,
    
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
    marginLeft: 90,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#C0C0C0',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#f5f5f5',
    padding: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxText: {
    fontSize: 16,
  },
  link: {
    color: '#00c0ff',
  },
  button: {
    backgroundColor: '#00c0ff',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
