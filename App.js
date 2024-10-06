import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab1 from './tabs/tab1';  
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react'; 



const Stack = createNativeStackNavigator();
export default function App() {
  const [userData, setUserData] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tab1' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Tab1' component={Tab1}/>
        <Stack.Screen name='Tab2'>
          {props => <Tab2 {...props} userData={userData} setUserData={setUserData} />}
        </Stack.Screen>
        <Stack.Screen name='Tab3'>
          {props => <Tab3 {...props} userData={userData} setUserData={setUserData} />}
        </Stack.Screen>
        <Stack.Screen name='Tab4' component={Tab4}/>
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
