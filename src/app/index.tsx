// import { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import { app, db, ref, onValue } from "@/config/firebase.js"

// function HomeScreen() {
//   const [temp, setTemp] = useState(0);
//   useEffect(() => {
//     const data = ref(db);
//     onValue(data, (snapshot) => {
//       setTemp(snapshot.val().temp);
//     });
//   }, [temp])
//   return (
//       <View className="flex-1 items-center justify-center bg-slate-100 px-6">
//       <Text className="text-4xl font-bold text-blue-600">
//         StrideSense
//       </Text>

//       <Text className="mt-3 text-center text-lg text-slate-600">
//         Smart Footwear Monitoring
//       </Text>
//       <Text className="mt-3 text-center text-lg text-slate-600">
//         Temperature: {temp}
//       </Text>
//     </View>
//   );
// }

// export default HomeScreen 
import "../../global.css"
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
   <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}