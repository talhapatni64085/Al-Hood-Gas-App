import { View, Text, TouchableOpacity, TextInput, Button} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { windowHeight, windowWidth } from '../utils/Dimensions'

export default function Refuel() {

    const [ emptycylinderweight, setEmptyCylinderWeight] = useState('');
//   const [email, setEmail] = useState('');
//   const [devicesno, setDevicesNo] = useState('');
//   const [deviceid, setDeviceId] = useState('');

  return (
    <SafeAreaView style={{
        height:windowHeight,
        width:windowWidth,
        flex:1,
    }}>
        <View style={{
        flex: 1,
        backgroundColor: 'lightgray',
      }}>
        <View style={{
          backgroundColor: "orange",
          height: "20%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
            <View style={{
              //width:'100%',
              paddingTop: 40,
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
              }}>Refuel</Text>
            </View>
            </View>
            <View style={{
                alignItems:'center',
                padding:10
            }}>
            <TextInput
            value={emptycylinderweight}
            onChangeText={setEmptyCylinderWeight} 
            placeholder='Enter Empty Cylinder Weight' 
            style = {{
            backgroundColor: 'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 4,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginVertical: 12,}}
            />

{/* <TextInput
            value={email}
            onChangeText={setEmail} 
            placeholder='Enter Email'
            style = {{backgroundColor: 'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 4,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginVertical: 12,}}
            />

<TextInput
            value={devicesno}
            onChangeText={setDevicesNo} 
            placeholder='Enter Devices No.'
            style = {{backgroundColor: 'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 4,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginVertical: 12,}}
            />

<TextInput
            value={deviceid}
            onChangeText={setDeviceId} 
            placeholder='Enter Device Id'
            style = {{
                backgroundColor: 'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 4,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginVertical: 12,}}
            /> */}
<View style={{
    width:'50%'
}}>
<Button
  onPress={''}
  title="Calculate"
  color="orange"
/>
</View>
            </View>
        </View>
    </SafeAreaView>
  )
}