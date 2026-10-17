import { CheckCircleIcon, XCircleIcon } from 'phosphor-react-native';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { globalStyles } from "./../../../../styles/global";
import { useState } from 'react';
import { router } from 'expo-router';
import CourseTitleCard from './../../../../components/cards/courseTitleCard'
import LessonCard, { LessonItemData } from './../../../../components/cards/lessonCard'

export default function pM() {
  const [isHovered, setIsHovered] = useState(false);

  const introLessons: LessonItemData[] = [
    {
      id: 1,
      title: 'Lesson 1 : Introduction to Public Management',
      route: './intro/lessonOne',
      completed: true,
    },
    {
      id: 2,
      title: 'Lesson 2 : Principle of Public Management',
      route: './intro/lessonOne',
      completed: true,
    },
    {
      id: 3,
      title: 'Lesson 3 : Public speaking in political contexts',
      route: './intro/lessonTwo',
      completed: false,
    },
  ];

  const corePrinciples: LessonItemData[] = [

    {
      id: 1,
      title: 'Lesson 1 : Policy Implementation',
      route: './core/lessonThree',
      completed: false,
    },

    {
      id: 2,
      title: 'Lesson 2 : Accountability & Responsibility',
      route: './core/lessonThree',
      completed: false,
    },

    {
      id: 3,
      title: 'Lesson 3 : Legality & Rule of Law',
      route: './core/lessonThree',
      completed: false,
    },

  ];
  
  return (
    <ScrollView 
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 100 }} 
    >
      {/* courseTitle */}
      <CourseTitleCard 
        courseTitle = 'Public Management'
        majorName = 'Master of Public Affair'
        lecturerName = 'Dr. Mona'
      />

      {/* Topic 1 Card */}
      <LessonCard topic="Introduction" lessons={introLessons} />

      {/* You can easily reuse it for Topic 2 on the same page or any other page! */}
      <LessonCard
        topic="Core Principles"
        lessons={corePrinciples}
      />
    </ScrollView>
  )
}