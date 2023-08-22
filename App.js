import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Components/LoginScreen'; 
import UserLogin from './Components/UserLogin';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} /> */}
        <Stack.Screen name="UserLogin" component={UserLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;