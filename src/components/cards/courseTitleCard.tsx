import { View, Text } from 'react-native'
import {globalStyles} from "./../../styles/global";
import React from 'react'

type courseTitleCardProps = {
  courseTitle: string;
  majorName: string;
  lecturerName: string;
};

export default function courseTitleCard({ 
    majorName,
    courseTitle,
    lecturerName
   }: courseTitleCardProps)  {
  return (
    <View style={globalStyles.courseInfoTitle}>
        <Text style={globalStyles.majorTitle}>
            {majorName}
        </Text>
        <Text style={globalStyles.courseName}>
            {courseTitle}
        </Text>
        <Text style={globalStyles.lecturerName}>
            {lecturerName}
        </Text>
    </View>
  )
}