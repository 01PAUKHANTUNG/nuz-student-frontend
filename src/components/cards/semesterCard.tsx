import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { globalStyles } from "./../../styles/global";


type SubjectCardProps = {
  semesterImg: ImageSourcePropType;
  semesterTitle: string;
  onPress?: () => void;
};

export default function semesterCard({
    semesterImg,
    semesterTitle,
    onPress,
}: SubjectCardProps) {

  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <View>
      <Pressable
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[
          globalStyles.semesterCard,
          isHovered ? globalStyles.semesterCardHover : undefined,
          isPressed ? globalStyles.semesterCardPressed : undefined,
        ]}
        onPress={onPress}
      >
        <Image 
          source= {typeof semesterImg === 'string' ? { uri: semesterImg } : semesterImg}
          style={globalStyles.semesterCardImage}
        />
        <View style={globalStyles.semesterCardContent}>
          <Text style={globalStyles.semesterCardTitle}>
            {semesterTitle}
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Open ${semesterTitle}`}
            onHoverIn={() => setIsButtonHovered(true)}
            onHoverOut={() => setIsButtonHovered(false)}
            onPressIn={() => setIsButtonPressed(true)}
            onPressOut={() => setIsButtonPressed(false)}
            onPress={onPress}
            style={[
              globalStyles.semesterCardBut,
              isButtonHovered ? globalStyles.semesterCardButHover : undefined,
              isButtonPressed ? globalStyles.semesterCardButPressed : undefined,
            ]}
          >
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}