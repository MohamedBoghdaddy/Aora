import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Link} from 'expo-router';
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Welcome to Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style ={{color:'blue'}}>
      Go to Profile
      </Link>
    </View>
  );
}


