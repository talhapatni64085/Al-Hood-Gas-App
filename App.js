import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/screens/Home'
import LogIn from './src/screens/LogIn'
import History from './src/screens/History'
import PaymentInfo from './src/screens/PaymentInfo'
import AboutUs from './src/screens/AboutUs'
import ContactUs from './src/screens/ContactUs'
import FAQ from './src/screens/FAQ'
import Notifications from './src/screens/Notifications'
import Users from './src/screens/Users';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer'
import CreateUser from './src/screens/CreateUser';
import Refuel from './src/screens/Refuel';


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{headerShown: false,
            drawerActiveBackgroundColor:'orange',
            drawerActiveTintColor:'#FFF',
            //drawerInactiveBackgroundColor:'#333', 
        drawerLabelStyle: {marginLeft:0,fontSize:15}}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Users" component={Users}/>
       <Drawer.Screen name="History" component={History}/>
      <Drawer.Screen name="Payment Info" component={PaymentInfo} />
      <Drawer.Screen name="About Us" component={AboutUs}/>
      <Drawer.Screen name="Contact Us" component={ContactUs}/>
      <Drawer.Screen name="FAQ'S" component={FAQ}/>
       <Drawer.Screen name="Login" component={LogIn}/>
      <Drawer.Screen name="Noti" component={Notifications}/> 
      <Drawer.Screen name="CreateUser" component={CreateUser}/>
      <Drawer.Screen name="Refuel" component={Refuel}/>
        
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


