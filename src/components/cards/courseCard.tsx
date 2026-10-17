import { useState } from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
// import { Progress, ProgressFilledTrack } from './../../../components/ui/progress';
import * as Progress from 'react-native-progress';
import { globalStyles } from "./../../styles/global";

type courseCardProps = {
  courseImg: ImageSourcePropType;
  courseTitle: string;
  comPer?: number;
  onPress?: () => void;
  buttonTitle?: string;
  semester: string;
};

export default function courseCard({
        courseImg,
        courseTitle,
        comPer = 0,
        onPress,
        semester,
    }: courseCardProps) {
      const [isButtonHovered, setIsButtonHovered] = useState(false);
      const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <View style={globalStyles.courseCard}>
      <View style={globalStyles.courseCon}>
        <View style={globalStyles.courseImgCon}>
          <Image 
            source={typeof courseImg === 'string' ? { uri: courseImg } : courseImg}
            style={globalStyles.courseImage}
          />
        </View>
        <View style={globalStyles.courseTitleCon}>
          <Text style={globalStyles.courseTextTitle}>
            {courseTitle}
          </Text>
          <Text style={globalStyles.courseSemester}>
            {semester} Semester
          </Text>
        </View>
      </View>

      <View style={globalStyles.courseTextCon}>
        <Text style={{marginTop:5}}>Course: {comPer}% completed</Text>
        
        <View style={[globalStyles.courseProgress]}>
          {/* <Progress value={10}  orientation="horizontal"  className="w-full rounded h-2">
            <ProgressFilledTrack  className="bg-[#0a378c]-600 rounded" />
          </Progress> */}
          <Progress.Bar
            progress={(Number(comPer) || 0) / 100}
            width={null}
            style={{ width: '100%' }}
            height={8}
            color="#0a378c"
            unfilledColor="#e5e7eb"
            borderWidth={0}
            borderRadius={4}
          />
        </View> 

        {/* <View style={globalStyles.courseBut}>
          <Button
            title={comPer === 0 ? "Start the Course" : "Resume the Course"}
            color="#0a378c"
            onPress={onPress}
          />
        </View> */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Open ${courseTitle}`}
          onPress={onPress}
          onHoverIn={() => setIsButtonHovered(true)}
          onHoverOut={() => setIsButtonHovered(false)}
          onPressIn={() => setIsButtonPressed(true)}
          onPressOut={() => setIsButtonPressed(false)}
          style={[
            globalStyles.courseBut,
            isButtonHovered ? globalStyles.courseButHover : undefined,
            isButtonPressed ? globalStyles.courseButPressed : undefined,
          ]}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                {comPer === 0 ? "Start the Course" : "Resume the Course"}
            </Text>
        </Pressable>
      </View>      
    </View>
  )
}