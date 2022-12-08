import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { windowHeight } from '../../src/utils/Dimensions'
import { windowWidth } from '../../src/utils/Dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler'
import UserTable from '../../src/components/UserTable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CreateUser from './CreateUser'
import SearchBar from '../components/SearchBar'

const Users = ({navigation}) => {

  const nav = useNavigation();

  return (
    <SafeAreaView style={{
      height: windowHeight,
      width: windowWidth,
      flex: 1,
    }}>
      <ScrollView vertical
        showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          backgroundColor: 'lightgray',
        }}>

          <View style={{
            backgroundColor: "orange",
            height: "16%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}>
            <View style={{
              //flexDirection: 'row',
              //justifyContent: 'space-between',
              marginTop: 20,
            }}>
              <TouchableOpacity
                onPress={() => nav.openDrawer()}
              >
                <AntDesign name='bars' size={30} color='#FFF' />
              </TouchableOpacity>
              <View style={{
                //width:'100%',
                marginTop: 0,
                alignItems: 'center',
              }}>
                <Text style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                }}>Users</Text>
              </View>
            </View>
          </View>

          <View>
            <SearchBar/>
          </View>

          <View style={{
              alignSelf: 'center',
            }}>
              <UserTable />
            </View>
        </View>
      </ScrollView>
      <View style={{
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
      }}>
        <TouchableOpacity
          onPress={()=> navigation.navigate(CreateUser)}
          >
          <Ionicons name='add-circle' size={80} color='orange' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default Users