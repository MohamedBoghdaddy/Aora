import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"; // Icon import
import HomeScreen from "./MyProject/screens/HomeScreen";
import DetailsScreen from "./AuthScreens/LoginScreen";
import SearchScreen from "./MyProject/screens/SearchScreen";
import ProfileScreen from "./MyProject/screens/ProfileScreen";
// import { TabBarIcon } from './components/navigation/TabBarIcon'; // Uncomment if TabBarIcon is needed

// Create Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Home Stack: This manages the Home and Details screens using Stack Navigator
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hiding header if needed
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator: This manages navigation between Home and Profile screens using Bottom Tabs
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer Navigator: This manages navigation between Tabs and Profile using Drawer Navigation
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          drawerLabel: "Home Tabs",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          drawerLabel: "Profile",
        }}
      />
    </Drawer.Navigator>
  );
}

// Main App component: This sets up the navigation structure and renders it in the NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
