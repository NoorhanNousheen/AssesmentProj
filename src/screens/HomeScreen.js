import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { SearchBar } from '@rneui/themed'
import api from '../api/api'
import { useNavigation } from '@react-navigation/native'
// import OnBoard from './OnBoard'
// import { Image } from '@rneui/base'

const HomeScreen = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    const nav=useNavigation();
    const fireApi=async()=>{
        try{
            const response=await api.get('/movie')
            console.log('response',response)
            setData(response.data.results)

        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fireApi()
    },[])

    const filteredData=data.filter((item)=>
        item.title.toLowerCase().includes(search.toLowerCase())
    )
    const onPressSignIn=()=>{
        // console.log('here')
        nav.navigate('OnBoard');
    }

    const renderListItem=({item})=>{
        // console.log(item)
        return(
            <View style={{marginHorizontal:20,marginVertical:10}}>
                <Image style={{height:150,width:"50%",marginBottom:10}} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
                <Text style={{color:'black',fontWeight:'500'}}>{item.title}</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',}}>
        <View style={{flex:0.7,paddingHorizontal:20,paddingVertical:20}}>
            <Text style={styles.textStyle}>Home Screen</Text>
        </View>
        <View style={{flex:0.3,marginLeft:50,paddingVertical:10}}>
            <TouchableOpacity onPress={onPressSignIn}>
                <View style={styles.buttonStyle}>
                    <Text style={{color:'white'}}>Sign In</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
      <SearchBar
        placeholder='Search for movie name'
        lightTheme  
         containerStyle={{backgroundColor:'transparent',borderColor:'transparent'}}
         inputContainerStyle={{backgroundColor:'transparent',borderWidth:1,borderBottomWidth:1,borderRadius:10}}
         value={search}
         onChangeText={setSearch}
      />
      <FlatList 
        data={filteredData}
        renderItem={renderListItem}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={{flexGrow:1}}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingTop:10
    },
    textStyle:{
        fontWeight:'600',
        fontSize:18,
        color:'black'
    },
    buttonStyle:{
        width:75,
        height:45,
        // backgroundColor:'red',
        borderWidth:1,
        borderColor:'orange',
        borderRadius:10,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        // marginBottom:10

    }
})