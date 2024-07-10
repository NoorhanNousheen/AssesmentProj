import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { SearchBar } from '@rneui/themed'
import api from '../api/api'
// import { Image } from '@rneui/base'

const HomeScreen = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')

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
    }
})