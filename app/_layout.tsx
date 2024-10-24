import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../MyProject/screens/HomeScreen";
import ProfileScreen from "../MyProject/screens/ProfileScreen";
import DetailsScreen from "../AuthScreens/LoginScreen";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackNav = Stack;

// Home Stack: This manages the Home and Details screens using Stack Navigator
function HomeStack() {
  return (
    <StackNav>
      <StackNav.Screen
        name="Home"
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name="Details"
        component={DetailsScreen} // Correct usage
      />
    </StackNav>
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

// Main Layout component
export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
      <StackNav>
        <StackNav.Screen
          name="(tabs)"
          component={MyTabs} // Correct usage
          options={{ headerShown: false }}
        />
        <StackNav.Screen
          name="not-found"
          component={MyDrawer} // Correct usage
        />
      </StackNav>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
