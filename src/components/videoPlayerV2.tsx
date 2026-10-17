import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useState } from 'react';
import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import DownloadButton from './button/downloadBut';
import * as ScreenOrientation from 'expo-screen-orientation';

type VideoPlayerCardProps = {
  title?: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl?: string | ImageSourcePropType;
  duration?: string;
  date?: string;
  autoplay?: boolean;
  loop?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  courseName?:string;
};

export default function VideoPlayerCard({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  duration,
  date,
  autoplay = false,
  loop = false,
  onPress,
  style,
  courseName
}: VideoPlayerCardProps) {
  const player = useVideoPlayer(videoUrl, (playerInstance) => {
    playerInstance.loop = loop;
    playerInstance.volume = 1;

    if (autoplay) {
      playerInstance.play();
    }
  });

  //download button's function
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate or run your file download here:
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 2000);
  };

  //video player status
  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  });

  const togglePlayback = () => {
    if (isPlaying) {
      player.pause();
      return;
    }

    player.play();
  };

  const mediaSource = typeof thumbnailUrl === 'string' ? { uri: thumbnailUrl } : thumbnailUrl;

  // Automatically lock to Landscape when entering fullscreen
  const handleFullscreenEnter = async () => {
    try {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    } catch (e) {
      console.log('Orientation lock error:', e);
    }
  };

  // Automatically return to Portrait when exiting fullscreen
  const handleFullscreenExit = async () => {
    try {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    } catch (e) {
      console.log('Orientation unlock error:', e);
    }
  };

  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      <View style={styles.mediaWrap}>
        {mediaSource ? (
          <Image
            source={mediaSource}
            resizeMode="cover"
            style={styles.thumbnail}
          />
        ) : null}

        <VideoView
          player={player}
          style={styles.video}
          fullscreenOptions={{
            enable: true,
            orientation: 'landscape', // Built-in expo-video landscape setting
          }}
          onFullscreenEnter={handleFullscreenEnter}
          onFullscreenExit={handleFullscreenExit}
          allowsPictureInPicture
          nativeControls={true}
          // fullscreenOptions={{ enable: true }}
        />

        {/* <Pressable
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? 'Pause video' : 'Play video'}
          onPress={togglePlayback}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </Pressable> */}
      </View>

      <View style={styles.content}>
        <View style={styles.videoInfo}>
          {date ?  <Text style={styles.date}>{date}</Text> : null}
          <Text style={styles.meta}>{isPlaying ? 'Playing' : 'Ready'}</Text>
          {duration ? <Text style={styles.meta}>{duration}</Text> : null}
        </View>
        {courseName ? <Text style={styles.courseName}>{courseName}</Text> : null}
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {description ? <Text style={styles.description}>{description}</Text> : null}

        {/* <View style={styles.metaRow}>
          <Text style={styles.meta}>{isPlaying ? 'Playing' : 'Ready'}</Text>
        </View> */}
      </View>
      {/* Solid Blue Button */}
      <View style={styles.downloadButCon}>
        <DownloadButton
          label="Download Video"
          isLoading={downloading}
          isDownloaded={downloaded}
          onPress={handleDownload}
          variant="solid" 

          style={styles.downloadBut}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '94%',
    marginLeft:10,
    marginRight:10,
    marginTop:40,
    maxWidth: 420,
    borderRadius: 18,
    borderBottomLeftRadius:6,
     borderBottomRightRadius:6,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  mediaWrap: {
    position: 'relative',
    width: '100%',
    height:200,
    backgroundColor: '#020202',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  thumbnail: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
    opacity: 0.6,
  },

  videoInfo: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:4
  },
  date: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },

  courseName: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '600',
    marginBottom: 0,
    marginTop:6
  },

  downloadButCon:{
    display:'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },

  downloadBut: {
    width:'92%'
  },

  // playButton: {
  //   position: 'absolute',
  //   right: 12,
  //   bottom: 12,
  //   zIndex: 2,
  //   backgroundColor: '#0a378c',
  //   borderRadius: 999,
  //   paddingHorizontal: 14,
  //   paddingVertical: 8,
  // },
  playButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
    marginTop:0,
    width:'100%'
  },
  description: {
    fontSize: 13,
    color: '#4b5563',
    lineHeight: 18,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meta: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },
});
