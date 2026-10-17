import NUZProvider from "@/context/NUZContext";
import { Stack } from "expo-router";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
// import CompactHeader from "./../components/headerV2";

export default function RootLayout() {
  return (
    <NUZProvider>
      {/* <StatusBar style="light"/> */}
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          statusBarHidden: false,
          statusBarStyle: "dark",   
          statusBarBackgroundColor: "#fff",  // Android only
          headerStyle: { backgroundColor: "#fff" },
          statusBarTranslucent: false, // Android: true = content draws under the bar
          headerTitle: () => (
             <>
                <Text style={{ fontSize: 12, color: "#000", textAlign: "center",  }}>
                  National University of Zoland
                </Text>        
            </>
          ),
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="assignment" />
        <Stack.Screen name="offlineStudy" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="login" />
        <Stack.Screen name="semOne" />
        <Stack.Screen name="semTwo" />
        <Stack.Screen name="pm" />
        <Stack.Screen name="lessonOne" />
      </Stack>
      <Toast />
    </NUZProvider>
  );
}