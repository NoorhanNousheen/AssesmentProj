import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Button } from '@rneui/themed'
import ConfirmationPop from '../components/ConfirmationPop';
import { useNavigation } from '@react-navigation/native';

const OnBoard = () => {

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("")
    const [nameerror,setnameerror]=useState(false);
    const [emailerror,setemailerror]=useState(false);
    const [passworderror,setpassworderror]=useState(false);
    const [confirmerror,setconfirmerror]=useState(false);
    const [passwordcheck,setPasswordCheck]=useState(false)
    const [emailexperror,setemailexperror]=useState(false)
    const [visible,setVisible]=useState(false)

    const nav=useNavigation()

    const onPressButton=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!username){
            setnameerror(true)
        }else{
            setnameerror(false)
        }
        if(!email){
            setemailerror(true)
        }else{
            setemailerror(false)
        }
        if(!password){
            setpassworderror(true)
        }else{
            setpassworderror(false)
        }
        if(!confirm){
            setconfirmerror(true)
        }else{
            setconfirmerror(false)
        }
        if(confirm !=password){
            setPasswordCheck(true)
        }else{
            setPasswordCheck(false)
        }
        if(!emailRegex.test(email)){
            setemailexperror(true)
        }else{
            setemailexperror(false)
        }
        if(!nameerror && !emailerror && !emailexperror && !passworderror && !passwordcheck && !confirmerror){
            console.log('sign in')
            setVisible(true)
        }
    }

    const onClose=()=>{
        setVisible(false)
        nav.navigate('Home')
    }
  return (
    <View style={{marginHorizontal:10,marginVertical:10}}>
      <View style={{alignItems:'center',paddingVertical:20}}>
        <Text style={{color:'black',fontWeight:'600',fontSize:18}}>Welcome!</Text>
      </View>
      <View style={{paddingVertical:10}}>
        <Text style={{color:'black',fontWeight:'600',fontSize:14}}>Enter Your Details</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Name *</Text>
        <TextInput 
            style={{
				borderWidth: 1,
		        borderRadius: 10,
				borderColor: "#cccaca",
	            marginTop: 10,
			    height: 40,
				paddingHorizontal: 15,
				fontSize: 15,
                width:"80%",
                marginVertical:15,
                color:'black'
		    }}
            placeholder='Enter Your Name'
            placeholderTextColor="lightgrey"
			value={username}
            onChangeText={(value)=>{setUsername(value)}}
            
		></TextInput>
        {nameerror && (
            <Text style={styles.errorStyle}>Name is required</Text>
        )}
        <Text style={styles.textStyle}>Email *</Text>
        <TextInput 
            style={{
				borderWidth: 1,
		        borderRadius: 10,
				borderColor: "#cccaca",
	            marginTop: 10,
			    height: 40,
				paddingHorizontal: 15,
				fontSize: 15,
                width:"80%",
                marginVertical:15,
                 color:'black'
		    }}
            placeholder='Enter Your Email'
            placeholderTextColor="lightgrey"
            value={email}
            onChangeText={(value)=>{setEmail(value)}}
			// value=
		></TextInput>
        {emailerror && (
            <Text style={styles.errorStyle}>Email is required</Text>
        )}
        {emailexperror && (
            <Text style={styles.errorStyle}>Enter Valid Email</Text>
        )}
        <Text style={styles.textStyle}>Password *</Text>
        <TextInput 
            style={{
				borderWidth: 1,
		        borderRadius: 10,
				borderColor: "#cccaca",
	            marginTop: 10,
			    height: 40,
				paddingHorizontal: 15,
				fontSize: 15,
                width:"80%",
                marginVertical:15,
                color:'black'
		    }}
            placeholder='Enter Your Password'
            placeholderTextColor="lightgrey"
            value={password}
            onChangeText={(value)=>{setPassword(value)}}
            secureTextEntry={true}
            
			// value=
		></TextInput>
        {passworderror && (
            <Text style={styles.errorStyle}>Password is required</Text>
        )}
        <Text style={styles.textStyle}>Confirm Password *</Text>
        <TextInput 
            style={{
				borderWidth: 1,
		        borderRadius: 10,
				borderColor: "#cccaca",
	            marginTop: 10,
			    height: 40,
				paddingHorizontal: 15,
				fontSize: 15,
                width:"80%",
                marginVertical:15,
                 color:'black'
		    }}
            placeholder='Enter Confirm Password'
            placeholderTextColor="lightgrey"
            value={confirm}
            onChangeText={(value)=>{setConfirm(value)}}
			// value=
		></TextInput>
        {confirmerror && (
            <Text style={styles.errorStyle}>Confrim Pasword is required</Text>
        )}
        {passwordcheck && (
            <Text style={styles.errorStyle}>Confirm Password not same as Password</Text>
        )}
        <Button title="Sign In" containerStyle={{width:"40%",borderRadius:10}} buttonStyle={{backgroundColor:'orange'}} onPress={onPressButton} ></Button>
      </View>
      <ConfirmationPop visibility={visible} onClose={onClose}></ConfirmationPop>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        fontWeight:'500',
        fontSize:14
    },
    errorStyle:{
        color:'red',
        fontsize:10,
        fontWeight:'500',
        marginBottom:5
    }
})