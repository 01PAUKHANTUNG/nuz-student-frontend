import { View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type CompactHeaderProps = {
  navigation: {
    goBack: () => void;
  };
  back?: boolean;
};

export default function CompactHeader({ navigation, back }: CompactHeaderProps) {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = 50;

  return (
    <View
      style={{
        height: insets.top + HEADER_HEIGHT,
        paddingTop: insets.top,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {back && (
        <Pressable
          onPress={navigation.goBack}
          hitSlop={12}
          style={{
            position: "absolute",
            left: 12,
            bottom: 0,
            height: HEADER_HEIGHT,
            justifyContent: "center",
          }}
        >
          <Ionicons name="chevron-back" size={22} color="#000" />
        </Pressable>
      )}

      <Text style={{ fontSize: 12, color: "#000" }}>
        National University of Zoland
      </Text>
    </View>
  );
}