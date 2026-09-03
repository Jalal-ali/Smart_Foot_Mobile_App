import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { app, db, ref, onValue } from "@/config/firebase.js"

function HomeScreen() {
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      setTemp(snapshot.val().temp);
    });
  }, [temp])
  return (
    <View>
      <Text>Temperature: {temp}</Text>
    </View>
  );
}

export default HomeScreen 