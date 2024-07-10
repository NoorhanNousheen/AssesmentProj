import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";

const Stack=createStackNavigator();

const MyStack=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title:'Home'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default MyStack