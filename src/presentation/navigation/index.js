import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {routeName} from './routeName';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import HomeScreen from '../screens/home/HomeScreen';
import RestaurantDetailScreen from '../screens/restaurants/RestaurantDetailScreen';
import CartScreen from '../screens/cart/CartScreen';
const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerShadowVisible: false,
          animation: 'slide_from_right',
        }}
        initialRouteName={routeName.Cart}>
        <RootStack.Screen
          name={routeName.Onboarding}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeName.Home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeName.RestaurantDetail}
          component={RestaurantDetailScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeName.Cart}
          component={CartScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
