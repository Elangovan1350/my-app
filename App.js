import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View className="flex-1 justify-center items-center bg-slate-500">
      <Text className="font-semibold text-4xl text-orange-400 my-3">
        Open up App.js to start working on your app!
      </Text>
      <Text className="font-bold text-xl my-3 text-gray-950">Count Value: {count}</Text>
      <Text
        className="bg-fuchsia-500 text-2xl px-5 py-2 rounded-xl font-bold "
        onPress={() => setCount(count + 1)}
      >
        Click Me
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
