import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import OnBoard from "./src/screens/OnBoard";
import OnBoarding from "./src/screens/OnBoarding";

const Stack=createStackNavigator();

const MyStack=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoarding" screenOptions={{headerShown:false}}>
      <Stack.Screen 
          name="OnBoarding"
          component={OnBoarding}
          options={{title:''}}

        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title:''}}
          
        />
        <Stack.Screen 
          name="OnBoard"
          component={OnBoard}
          options={{title:''}}
            
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default MyStack