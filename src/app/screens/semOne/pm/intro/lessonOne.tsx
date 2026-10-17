import VideoPlayerCard from "@/components/videoPlayerV2";
import { View } from 'react-native';

export default function lessonOne() {
    
  return (
    <View >
       <VideoPlayerCard
        title="Lesson 1 : Introduction to Public Management"
        description="Watch this short lesson before starting the topic."
        videoUrl="https://www.pexels.com/download/video/8847940/"
        thumbnailUrl="https://images.unsplash.com/photo-..."
        // duration="04:20"
        date='8/10/2026'
        courseName = 'Public Management'
        autoplay={true}
        loop={true}
        />
    </View>
  )
}