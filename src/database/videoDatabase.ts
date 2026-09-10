import { Directory, File, Paths } from "expo-file-system";
import { getDatabase } from "./database";
import { useEffect } from "react";

export async function downloadVideo(
  video: any,
  headers?: Record<string, string>
) {
  try {
    const db = await getDatabase();

    const videoId = String(video.id);

    // App private storage
    const videoDirectory = new Directory(
      Paths.document,
      "videos"
    );

    // Create /videos directory
    if (!videoDirectory.exists) {
      videoDirectory.create({
        intermediates: true,
        overwrite: false,
      });
    }

    // File path:
    // Android/iOS app storage/videos/123.mp4
    const localFile = new File(
      videoDirectory,
      `${videoId}.mp4`
    );

    console.log("Downloading:", video.videoUrl);
    console.log("Saving to:", localFile.uri);

    // Download MP4 to Android/iOS app storage
    const downloadedFile = await File.downloadFileAsync(
      video.videoUrl,
      localFile,
      {
        idempotent: true,
        headers,
      }
    );

    console.log(
      "Download complete:",
      downloadedFile.uri
    );

    // Save information in SQLite
    await db.runAsync(
      `
      INSERT OR REPLACE INTO videos
      (
        id,
        course,
        batch,
        semester,
        module,
        lesson,
        title,
        videoUrl,
        localUri,
        downloaded
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      videoId,
      video.course,
      video.batch,
      video.semester,
      video.module,
      video.lesson,
      video.title,
      video.videoUrl,
      downloadedFile.uri,
      1
    );

    return downloadedFile.uri;

  } catch (error) {
    console.error("Video download error:", error);
    throw error;
  }
}


// Get one downloaded video
export async function getDownloadedVideo(
  videoId: string | number
) {
  const db = await getDatabase();

  const video = await db.getFirstAsync<any>(
    `
    SELECT *
    FROM videos
    WHERE id = ?
    AND downloaded = 1
    `,
    String(videoId)
  );

  return video ?? null;
}


// Get all downloaded videos
export async function getDownloadedVideos() {
  const db = await getDatabase();

  return await db.getAllAsync<any>(
    `
    SELECT *
    FROM videos
    WHERE downloaded = 1
    ORDER BY lesson ASC
    `
  );
}


// Delete downloaded video
export async function deleteDownloadedVideo(id: string) {
  const db = await getDatabase();

  // Get the video first
  const video = await db.getFirstAsync<any>(
    `
    SELECT *
    FROM videos
    WHERE id = ? AND downloaded = 1
    `,
    [id]
  );

  if (!video) {
    throw new Error("Downloaded video not found");
  }

  // Delete physical video file
  if (video.localUri) {
    try {
      const file = new File(video.localUri);

      if (file.exists) {
        file.delete();
      }
    } catch (error) {
      console.log("File delete error:", error);
    }
  }

  // Delete database record
  await db.runAsync(
    `
    DELETE FROM videos
    WHERE id = ?
    `,
    [id]
  );

  return true;
}


