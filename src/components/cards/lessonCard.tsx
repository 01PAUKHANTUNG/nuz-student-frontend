import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter, Href } from 'expo-router';
import {
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
} from 'phosphor-react-native';
import { globalStyles } from '../../styles/global'; // Adjust relative path if needed

export interface LessonItemData {
  id: string | number;
  title: string;
  route?: Href; // e.g., "./intro/lessonOne" or "/screens/semOne/pm/intro/lessonOne"
  completed?: boolean;
  onPress?: () => void;
}

interface LessonCardProps {
  topic: string;
  lessons: LessonItemData[];
}

export default function LessonCard({ topic, lessons }: LessonCardProps) {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  const handlePress = (lesson: LessonItemData) => {
    if (lesson.onPress) {
      lesson.onPress();
    } else if (lesson.route) {
      router.push(lesson.route);
    }
  };

  return (
    <View style={globalStyles.lessonCard}>
      {/* Card Header */}
      <View style={globalStyles.lessonCardHeader}>
        <Text style={globalStyles.lessonCardHeaderText}> {topic} </Text>
      </View>

      {/* Card Body (Loops through all lessons in this topic) */}
      <View style={globalStyles.lessonCardBody}>
        {lessons.map((lesson) => {
          const isHovered = hoveredId === lesson.id;

          return (
            <Pressable
              key={lesson.id}
              onPress={() => handlePress(lesson)}
              onPressIn={() => setHoveredId(lesson.id)}
              onPressOut={() => setHoveredId(null)}
              onHoverIn={() => setHoveredId(lesson.id)}
              onHoverOut={() => setHoveredId(null)}
              style={[
                globalStyles.lessonList,
                isHovered && { backgroundColor: '#e8f0fe' },
              ]}
            >
              <Text
                style={[
                  globalStyles.lessonListText,
                  isHovered && { color: '#0a378c' },
                ]}
              >
                {lesson.title}
              </Text>

              {lesson.completed ? (
                <CheckCircleIcon
                  size={28}
                  weight="fill"
                  color={isHovered ? '#0a378c' : '#585858b9'}
                />
              ) : (
                <XCircleIcon
                  size={28}
                  weight="fill"
                  color={isHovered ? '#0a378c' : '#585858b9'}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}