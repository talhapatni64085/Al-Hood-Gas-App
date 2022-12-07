import { View, Text, TouchableOpacity, TextInput, Image, Alert} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {windowHeight} from '../../src/utils/Dimensions'
import {windowWidth} from '../../src/utils/Dimensions'
import UserTable from '../components/UserTable'
import { ScrollView } from 'react-native-gesture-handler'

export default function Home() {

const nav = useNavigation();

const onButtonPressed = () => {
  Alert.alert('Button Pressed');
}

  return (
    <SafeAreaView style={{
      height:windowHeight,
      width:windowWidth,
      flex:1,
    }}>
      <View style={{
        flex:1,
        backgroundColor:'lightgray',
      }}>
      <View style={{
        backgroundColor: "lightgray",
        height: "45%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
          <TouchableOpacity
          onPress={() => nav.openDrawer()}
          >
            <AntDesign name='bars' size={30} color='orange'/>
          </TouchableOpacity>
<Text style={{
  fontSize: 28,
  color: "orange",
  fontWeight: "bold",
}}>Home</Text>
          <TouchableOpacity>
            <Ionicons name='notifications' size={30} color='orange'/>
          </TouchableOpacity>
        </View>
        <View style={{
          alignItems:'center',
          marginTop:windowHeight-700,
        }}>
<Image source={require('../../assets/images/logo_1.png')}
style={{height:windowHeight-450,width:windowWidth-85}}/>
      </View>
      </View>
      <ScrollView 
    vertical
    showsVerticalScrollIndicator={false}>
      <View style={{
        padding:10,
                    flexDirection:'row',
                    marginVertical:15,
                    justifyContent:'space-between',
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'300',
                    }}>
                        Users
                        </Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{
                            color:'orange',
                            fontSize:18,
                        }}>
                            See all
                            </Text>
                    </TouchableOpacity>
                </View>
      {/* <View style={{
                    flexDirection: 'row',
                    borderColor: '#C6C6C6',
                    borderRadius: 10,
                    borderWidth: 3,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                }}>
                    <Feather name='search' size={20} color='#C6C6C6' style={{
                        marginRight: 5,
                    }} />
                    <TextInput placeholder='Search' />
                </View> */}
                <View style={{
                  alignSelf:'center',
                }}>
                <UserTable/>
                </View>
                
                </ScrollView>
                <View style={{
  position:'absolute',
  width:100,
  height:100,
  alignItems:'center',
  justifyContent:'center',
  right:0,
  bottom:0,
}}>
  <TouchableOpacity 
  onPress={onButtonPressed}>
<Ionicons name='add-circle' size={80} color='orange'/>
  </TouchableOpacity>
</View>
                </View>
                
    </SafeAreaView>
    
  )
}