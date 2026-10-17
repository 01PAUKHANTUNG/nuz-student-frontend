import React, { useState } from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import { DownloadSimple, CheckCircle } from 'phosphor-react-native';

interface DownloadButtonProps {
  label?: string;
  onPress: () => void;
  isLoading?: boolean;
  isDownloaded?: boolean;
  variant?: 'solid' | 'outline';
  style?: ViewStyle;
}

export default function DownloadButton({
  label = 'Download Lecture',
  onPress,
  isLoading = false,
  isDownloaded = false,
  variant = 'solid',
  style,
}: DownloadButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const isSolid = variant === 'solid';

  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading || isDownloaded}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onHoverIn={() => setIsPressed(true)}
      onHoverOut={() => setIsPressed(false)}
      style={[
        styles.buttonBase,
        isSolid ? styles.solidButton : styles.outlineButton,
        isPressed && (isSolid ? styles.solidPressed : styles.outlinePressed),
        isDownloaded && styles.downloadedButton,
        style,
      ]}
    >
      {isLoading ? (
        <>
          <ActivityIndicator
            size="small"
            color={isSolid ? '#ffffff' : '#0a378c'}
          />
          <Text
            style={[
              styles.textBase,
              isSolid ? styles.solidText : styles.outlineText,
            ]}
          >
            Downloading...
          </Text>
        </>
      ) : isDownloaded ? (
        <>
          <CheckCircle size={20} weight="fill" color="white" />
          <Text style={[styles.textBase, styles.downloadedText]}>
            Saved Offline
          </Text>
        </>
      ) : (
        <>
          <DownloadSimple
            size={20}
            weight="bold"
            color={
              isSolid
                ? '#ffffff'
                : isPressed
                ? '#ffffff'
                : '#0a378c'
            }
          />
          <Text
            style={[
              styles.textBase,
              isSolid ? styles.solidText : styles.outlineText,
              !isSolid && isPressed && styles.outlineTextPressed,
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  // Solid Blue Style
  solidButton: {
    backgroundColor: '#0a378c',
  },
  solidPressed: {
    backgroundColor: '#072661',
    transform: [{ scale: 0.98 }],
  },
  solidText: {
    color: '#ffffff',
  },
  // Outline Style
  outlineButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#0a378c',
  },
  outlinePressed: {
    backgroundColor: '#0a378c',
    transform: [{ scale: 0.98 }],
  },
  outlineText: {
    color: '#0a378c',
  },
  outlineTextPressed: {
    color: '#ffffff',
  },
  // Downloaded / Completed Style
  downloadedButton: {
    // backgroundColor: '#54e787',
    backgroundColor: '#51a4df',
    borderColor: '#51a4df',
    borderWidth: 1,
  },
  downloadedText: {
    color: '#f9fffb',
  },
  textBase: {
    fontSize: 15,
    fontWeight: '600',
  },
});