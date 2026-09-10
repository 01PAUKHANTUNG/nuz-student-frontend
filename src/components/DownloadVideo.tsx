import { deleteDownloadedVideo } from "@/database/videoDatabase";
import { globalStyles } from "@/styles/global";
import { useVideoPlayer, VideoView } from "expo-video";
import { Text, TouchableOpacity, View } from "react-native";

type VideoPlayersProps = {
  video: {
    id: string;
    course: string;
    batch: number;
    semester: number;
    module: string;
    lesson: number;
    title: string;
    videoUrl: string;
    duration: number;
  };
};

export default function DownloadVideo({ video }: VideoPlayersProps) {
  const player = useVideoPlayer(video.videoUrl);
   const handleDelete = async (id: string) => {
    await deleteDownloadedVideo(id);
    
  };

  return (
    <View>
      <VideoView
        player={player}
        style={{
          width: "100%",
          height: 300,
        }}
        nativeControls
        fullscreenOptions={{
          enable: true,
        }}
      />
      <TouchableOpacity style={globalStyles.logoutButton} onPress={()=>handleDelete(video.id)}>
        <Text style={globalStyles.buttonText}> Delete</Text>
      </TouchableOpacity>
    </View>
  );
}