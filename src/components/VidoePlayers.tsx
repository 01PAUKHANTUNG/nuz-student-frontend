import { NUZContext } from "@/context/NUZContext";
import { downloadVideo } from "@/database/videoDatabase";
import { globalStyles } from "@/styles/global";
import { useVideoPlayer, VideoView } from "expo-video";
import { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

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

export default function VideoPlayers({video}: VideoPlayersProps) {
  const { token } = useContext(NUZContext);
  const player = useVideoPlayer(video.videoUrl)

  const [downloaded, setDownloaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sqlData, setSqlData] = useState({});


async function handleDownload() {
  try {
    setLoading(true);

    const result = await downloadVideo(video, token ? {
      Authorization: `Bearer ${token}`,
    } : undefined);

    if (result) {
      setDownloaded(true);
      setSqlData(result);

    }
  } catch (error: any) {
    const message =
      error instanceof Error && error.message
        ? error.message
        : "Download failed";

    Alert.alert("Download failed", message);
  } finally {
    setLoading(false);
  }
}


  return (
    <View>
      <Text>
        Class : {video.course} 

      </Text>

      <Text>
        Batch : {video.batch}
      </Text>

      <Text>
        Semester : {video.semester}
      </Text>

      <Text>
        Module : {video.module}
      </Text>

       {/* Your video player */}
      <VideoView 
      player={player}
      style={{ width: '100%', height: 300 }}
      />

      <Text style={globalStyles.title}>
        Lesson - {video.lesson} ({video.title})
      </Text>

      {!downloaded && (
        <TouchableOpacity
          onPress={handleDownload}
          disabled={loading}
          style={globalStyles.downloadButton}
        >
          <Text style={globalStyles.downloadText}>
            {loading
              ? "Downloading..."
              : "Download Video"}
          </Text>
        </TouchableOpacity>
      )}

      {downloaded && (
        <Text>
          ✓ Video Downloaded 
        </Text>
      )}
    </View>
  );
}
