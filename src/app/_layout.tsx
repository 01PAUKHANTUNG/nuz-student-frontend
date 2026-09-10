import NUZProvider from "@/context/NUZContext";
import { Stack } from "expo-router";
import { Image, View, Text } from "react-native";
import Toast from 'react-native-toast-message'

export default function RootLayout() {
  return (
    <NUZProvider>
     
      <Stack
        
        screenOptions={{
          headerTitle: () => (
            <View>
              <Image
                source={require("../../assets/images/logo.jpg")}
                style={{
                  width: 45,
                  height: 45,
                  resizeMode: "contain",
                
                }}
              />
             
            </View>
          
          ),
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="assignment" />
        <Stack.Screen name="offlineStudy" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="login" />
      </Stack>
     <Toast />
    </NUZProvider>
  );
}